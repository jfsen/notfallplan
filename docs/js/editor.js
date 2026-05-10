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
  let formatted;

  if (type === "bullet") {
    formatted = selectedLines.map((l) => `- ${l}`).join("\n");
  } else {
    formatted = selectedLines.map((l, i) => `${i + 1}. ${l}`).join("\n");
  }

  ta.value = text.substring(0, lineStart) + formatted + text.substring(lineEnd);
  ta.selectionStart = lineStart;
  ta.selectionEnd = lineStart + formatted.length;
  ta.focus();
  ta.dispatchEvent(new Event("input"));
}
