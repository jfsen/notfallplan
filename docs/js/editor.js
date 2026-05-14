// ==================== EDITOR MODAL ====================
let currentEditingId = null;
let isCustom = false;
let saveTimeout = null;

// Cached DOM refs
const $editor = () => document.getElementById("editor-textarea");
const $title = () => document.getElementById("editor-title");
const $status = () => document.getElementById("editor-status");
const $modal = () => document.getElementById("editor-modal");

// ── Open / Close / Save ──────────────────────────────

function openEditor(id, custom = false) {
  currentEditingId = id;
  isCustom = custom;

  const ta = $editor();
  const title = $title();

  if (custom) {
    const section = CUSTOM_SECTIONS.find((s) => s.id === id);
    ta.value = section ? section.content || "" : "";
    title.textContent = section ? section.title : "Bearbeiten";
  } else {
    ta.value = DATA[id] || "";
    const config = SECTION_CONFIG.find((s) => s.id === id);
    title.textContent = config ? config.title : "Bearbeiten";
  }

  $status().innerHTML = '<span style="color:#34d399;">✓</span>';
  $modal().style.display = "flex";
  ta.focus();

  ta.oninput = () => {
    $status().innerHTML = '<span style="color:#fbbf24;">●</span>';
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(autoSaveEditor, 700);
  };
}

function autoSaveEditor() {
  if (!currentEditingId) return;

  const value = $editor().value.trim();

  if (isCustom) {
    const section = CUSTOM_SECTIONS.find((s) => s.id === currentEditingId);
    if (section) section.content = value;
  } else {
    DATA[currentEditingId] = value;
  }

  $status().innerHTML = '<span style="color:#34d399;">✓</span>';
  saveToLocalStorage();
  refreshDisplays();
}

function closeEditor() {
  autoSaveEditor();
  $modal().style.display = "none";
  currentEditingId = null;
}

// ── Format Helpers ───────────────────────────────────

/**
 * Replace the current selection with `newText` using execCommand,
 * which preserves the browser's undo stack. Returns the new length of
 * the inserted text so callers can re-position the selection.
 */
function replaceSelection(newText) {
  const ta = $editor();
  ta.focus();
  // execCommand('insertText') replaces the current selection with the given
  // text and moves the cursor to the end of the inserted text.
  document.execCommand("insertText", false, newText);
  return newText.length;
}

/**
 * Expand the selection to full lines (start of first line → end of last line).
 * Returns { lineStart, lineEnd, text }.
 */
function getLineRange(ta) {
  const start = ta.selectionStart;
  const end = ta.selectionEnd;
  const text = ta.value;
  const lineStart = text.lastIndexOf("\n", start - 1) + 1;
  let lineEnd = text.indexOf("\n", end);
  if (lineEnd === -1) lineEnd = text.length;
  return { lineStart, lineEnd, text, start, end };
}

// ── Key Bindings (smart Enter + Ctrl shortcuts) ─────

function handleEditorKeydown(e) {
  const ta = e.target;

  // Ctrl/Cmd + B / I / U / K  – shortcuts for formatting (do not consume
  // the native key when no formatting command is matched).
  if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey) {
    const map = { b: "bold", i: "italic", u: "underline", k: "link" };
    const cmd = map[e.key.toLowerCase()];
    if (cmd) {
      e.preventDefault();
      // Delegate to the same entry-point the toolbar buttons use
      if (cmd === "link") insertLink();
      else insertInlineFormat(cmd);
      return;
    }
  }

  // ── Smart Enter logic ──
  if (e.key !== "Enter" || e.shiftKey) return;

  const pos = ta.selectionStart;
  if (ta.selectionEnd !== pos) return; // don't interfere with range selections

  const text = ta.value;
  const lineStart = text.lastIndexOf("\n", pos - 1) + 1;
  let lineEnd = text.indexOf("\n", pos);
  if (lineEnd === -1) lineEnd = text.length;

  const fullLine = text.substring(lineStart, lineEnd);

  // Detect list prefix (allow leading whitespace for indented lists)
  const bulletMatch = fullLine.match(/^(\s*)([-*] )(.*)/);
  const numberedMatch = fullLine.match(/^(\s*)(\d+)([.)]) (.*)/);

  if (!bulletMatch && !numberedMatch) return;

  e.preventDefault();

  let indent, prefix, nextPrefix;
  if (bulletMatch) {
    [, indent, prefix] = bulletMatch;
    nextPrefix = indent + prefix;
  } else {
    const [, ws, numStr, sep] = numberedMatch;
    indent = ws;
    const num = parseInt(numStr, 10);
    prefix = `${num}${sep} `;
    nextPrefix = indent + `${num + 1}${sep} `;
  }

  // Content after the prefix (trimmed to detect "empty" item)
  const contentAfterPrefix = fullLine.trim().slice(prefix.length).trim();

  if (contentAfterPrefix === "") {
    // Empty list item → exit the list: strip the entire prefix + indent
    ta.value =
      text.substring(0, lineStart) +
      text.substring(lineStart + indent.length + prefix.length);
    ta.selectionStart = ta.selectionEnd = lineStart;
  } else {
    // Non-empty → newline + next list item
    const insertion = "\n" + nextPrefix;
    ta.value = text.substring(0, pos) + insertion + text.substring(pos);
    ta.selectionStart = ta.selectionEnd = pos + insertion.length;
  }

  ta.dispatchEvent(new Event("input"));
}

// ── List formatting (bullet / numbered) ──────────────

function insertFormatting(type) {
  const ta = $editor();
  const r = getLineRange(ta);
  const { lineStart, lineEnd } = r;
  const lines = r.text.substring(lineStart, lineEnd).split("\n");

  const isBullet = type === "bullet";
  // Allow optional leading whitespace when detecting current type
  const targetRe = isBullet ? /^\s*[-*]\s+/ : /^\s*\d+[.)]\s+/;

  // Strip any existing list prefix (bullet or numbered), preserving content
  const strip = (l) => l.replace(/^\s*([-*]|\d+[.)])\s+/, "");

  let formatted;
  if (lines.every((l) => targetRe.test(l))) {
    // Already this list type → toggle OFF (unwrap)
    formatted = lines.map(strip).join("\n");
  } else {
    // Strip any prefix first, then apply the new type
    const stripped = lines.map(strip);
    formatted = isBullet
      ? stripped.map((l) => `- ${l}`).join("\n")
      : stripped.map((l, i) => `${i + 1}. ${l}`).join("\n");
  }

  ta.focus();
  ta.selectionStart = lineStart;
  ta.selectionEnd = lineEnd;

  replaceSelection(formatted);

  // Select the result
  ta.selectionStart = lineStart;
  ta.selectionEnd = lineStart + formatted.length;
  ta.dispatchEvent(new Event("input"));
}

// ── Inline formatting (bold / italic / underline) ────

function insertInlineFormat(type) {
  const ta = $editor();
  let start = ta.selectionStart;
  let end = ta.selectionEnd;
  const text = ta.value;

  const wrapperMap = { bold: "**", italic: "*", underline: "__" };
  const wrapper = wrapperMap[type];
  if (!wrapper) return;

  const selected = text.substring(start, end);
  const hasSelection = start !== end;

  if (!hasSelection) {
    // Nothing selected → insert placeholder text
    const labels = {
      bold: "fett",
      italic: "kursiv",
      underline: "unterstrichen",
    };
    const example = labels[type];
    const insert = wrapper + example + wrapper;
    replaceSelection(insert);
    // Select the inner example text
    ta.selectionStart = start + wrapper.length;
    ta.selectionEnd = start + wrapper.length + example.length;
    ta.dispatchEvent(new Event("input"));
    return;
  }

  // ── Multi-line selection: apply formatting to EACH line ──
  const lines = selected.split("\n");

  // Helper: check whether every line is already wrapped
  const everyWrapped = (arr, w) =>
    arr.length > 0 &&
    arr.every(
      (l) => l.startsWith(w) && l.endsWith(w) && l.length >= w.length * 2,
    );

  if (everyWrapped(lines, wrapper)) {
    // Toggle OFF: strip wrapper from every line
    const unwrapped = lines
      .map((l) => l.slice(wrapper.length, -wrapper.length))
      .join("\n");
    replaceSelection(unwrapped);
    ta.selectionStart = start;
    ta.selectionEnd = start + unwrapped.length;
  } else {
    // Toggle ON: wrap each line individually
    const wrapped = lines.map((l) => wrapper + l + wrapper).join("\n");
    replaceSelection(wrapped);
    ta.selectionStart = start;
    ta.selectionEnd = start + wrapped.length;
  }

  ta.dispatchEvent(new Event("input"));
}

// ── Link insertion ───────────────────────────────────

let linkState = null;

function insertLink() {
  const ta = $editor();
  linkState = {
    start: ta.selectionStart,
    end: ta.selectionEnd,
    selected: ta.value.substring(ta.selectionStart, ta.selectionEnd),
  };

  document.getElementById("link-url").value = "https://";
  document.getElementById("link-text").value = linkState.selected || "";
  document.getElementById("link-modal").style.display = "flex";

  // Focus and select the URL field on next tick (modal needs to render first)
  setTimeout(() => {
    const urlInput = document.getElementById("link-url");
    urlInput.focus();
    urlInput.select();
  }, 50);
}

function hideLinkModal() {
  document.getElementById("link-modal").style.display = "none";
  linkState = null;
}

function insertLinkConfirm() {
  if (!linkState) return;

  let url = document.getElementById("link-url").value.trim();
  if (!url) return;

  // Auto-prepend https:// if no protocol is given
  if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(url)) {
    url = "https://" + url;
  }

  const text = document.getElementById("link-text").value.trim() || url;
  const markdown = `[${text}](${url})`;

  const ta = $editor();

  // IMPORTANT: do NOT focus the textarea during this handler.
  // The user pressed Enter to submit — if we move focus to the
  // textarea while the key is still held, key-repeat generates
  // new keydown events there which insert an unwanted newline.
  // Instead, modify the value directly and defer focus.

  // Modify value at the stored selection range
  const before = ta.value.substring(0, linkState.start);
  const after = ta.value.substring(linkState.end);
  ta.value = before + markdown + after;

  // Select the inserted markdown so the user can adjust
  ta.setSelectionRange(linkState.start, linkState.start + markdown.length);

  // Hide modal immediately so the Enter event doesn't interact with it
  document.getElementById("link-modal").style.display = "none";
  linkState = null;

  // Trigger autosave on idle
  ta.dispatchEvent(new Event("input"));

  // Focus the editor on the next tick, after the key is fully released
  setTimeout(() => ta.focus(), 0);
}
