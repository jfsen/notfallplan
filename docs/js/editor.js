// ==================== EDITOR MODAL ====================
let currentEditingId = null;
let isCustom = false;
let saveTimeout = null;

function openEditor(id, custom = false) {
  currentEditingId = id;
  isCustom = custom;

  const textarea = document.getElementById("editor-textarea");
  const titleEl = document.getElementById("editor-title");
  const statusEl = document.getElementById("editor-status");

  if (custom) {
    const section = CUSTOM_SECTIONS.find((s) => s.id === id);
    textarea.value = section ? section.content || "" : "";
    titleEl.textContent = section ? section.title : "Bearbeiten";
  } else {
    textarea.value = DATA[id] || "";
    const config = SECTION_CONFIG.find((s) => s.id === id);
    titleEl.textContent = config ? config.title : "Bearbeiten";
  }

  statusEl.innerHTML = '<span style="color:#34d399;">✓</span>';
  document.getElementById("editor-modal").style.display = "flex";
  textarea.focus();

  textarea.oninput = () => {
    statusEl.innerHTML = '<span style="color:#fbbf24;">●</span>';
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(autoSaveEditor, 700);
  };
}

function autoSaveEditor() {
  if (!currentEditingId) return;

  const value = document.getElementById("editor-textarea").value.trim();

  if (isCustom) {
    const section = CUSTOM_SECTIONS.find((s) => s.id === currentEditingId);
    if (section) section.content = value;
  } else {
    DATA[currentEditingId] = value;
  }

  document.getElementById("editor-status").innerHTML =
    '<span style="color:#34d399;">✓</span>';
  saveToLocalStorage();
  refreshDisplays();
}

function closeEditor() {
  autoSaveEditor();
  document.getElementById("editor-modal").style.display = "none";
  currentEditingId = null;
}

// Smart Enter: continue a list on Enter, exit it on Enter when the item is empty.
// Shift+Enter always inserts a plain newline regardless of context.
function handleEditorKeydown(e) {
  if (e.key !== "Enter" || e.shiftKey) return;

  const ta = e.target;
  const pos = ta.selectionStart;
  if (ta.selectionEnd !== pos) return; // don't interfere with range selections

  const text = ta.value;
  const lineStart = text.lastIndexOf("\n", pos - 1) + 1;
  let lineEnd = text.indexOf("\n", pos);
  if (lineEnd === -1) lineEnd = text.length;

  const fullLine = text.substring(lineStart, lineEnd);

  const bulletMatch = fullLine.match(/^([-*] )/);
  const numberedMatch = fullLine.match(/^(\d+)([.)]) /);
  if (!bulletMatch && !numberedMatch) return; // not in a list — use default Enter

  e.preventDefault();

  let prefix, nextPrefix;
  if (bulletMatch) {
    prefix = nextPrefix = bulletMatch[1]; // e.g. "- "
  } else {
    const num = parseInt(numberedMatch[1], 10);
    const sep = numberedMatch[2]; // "." or ")"
    prefix = `${num}${sep} `;
    nextPrefix = `${num + 1}${sep} `;
  }

  const contentAfterPrefix = fullLine.slice(prefix.length).trim();

  if (contentAfterPrefix === "") {
    // Empty list item — exit the list: strip the prefix, leave a blank line
    ta.value =
      text.substring(0, lineStart) + text.substring(lineStart + prefix.length);
    ta.selectionStart = ta.selectionEnd = lineStart;
  } else {
    // Non-empty item — insert a newline and start the next list item
    const insertion = "\n" + nextPrefix;
    ta.value = text.substring(0, pos) + insertion + text.substring(pos);
    ta.selectionStart = ta.selectionEnd = pos + insertion.length;
  }

  ta.dispatchEvent(new Event("input"));
}

function insertFormatting(type) {
  const ta = document.getElementById("editor-textarea");
  const start = ta.selectionStart;
  const end = ta.selectionEnd;
  const text = ta.value;

  // Expand selection to cover full lines
  const lineStart = text.lastIndexOf("\n", start - 1) + 1;
  let lineEnd = text.indexOf("\n", end);
  if (lineEnd === -1) lineEnd = text.length;

  const selectedLines = text.substring(lineStart, lineEnd).split("\n");
  const isBullet = type === "bullet";
  const targetRe = isBullet ? /^[-*]\s+/ : /^\d+[.)]\s+/;

  // Strip any existing list prefix (bullet or numbered) from a line
  const strip = (l) => l.replace(/^([-*]|\d+[.)])\s+/, "");

  let formatted;
  if (selectedLines.every((l) => targetRe.test(l))) {
    // All lines already have this list type → toggle OFF
    formatted = selectedLines.map(strip).join("\n");
  } else {
    // Some or none have it → strip any existing prefix, then apply the new type
    const stripped = selectedLines.map(strip);
    formatted = isBullet
      ? stripped.map((l) => `- ${l}`).join("\n")
      : stripped.map((l, i) => `${i + 1}. ${l}`).join("\n");
  }

  ta.value = text.substring(0, lineStart) + formatted + text.substring(lineEnd);
  ta.selectionStart = lineStart;
  ta.selectionEnd = lineStart + formatted.length;
  ta.focus();
  ta.dispatchEvent(new Event("input"));
}
