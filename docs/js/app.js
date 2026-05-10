// ==================== DAY COUNTER ====================

function calculateDays(animate = false) {
  if (!DATA.startDate) {
    document.getElementById("days-count").textContent = "0";
    return;
  }
  const start = new Date(DATA.startDate + "T00:00:00");
  const now = new Date();
  const berlinNow = new Date(now.getTime() + getBerlinOffset(now));
  start.setHours(0, 0, 0, 0);
  berlinNow.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((berlinNow - start) / (1000 * 60 * 60 * 24));
  const days = Math.max(0, diffDays);
  if (animate) {
    animateCounter(days);
  } else {
    document.getElementById("days-count").textContent = days;
  }
}

function updateStartDate(val) {
  if (val) {
    DATA.startDate = val;
    calculateDays();
    saveToLocalStorage();
  }
}

// ==================== EXPORT ====================

function getStylesheetContent() {
  return Array.from(document.styleSheets)
    .flatMap((sheet) => {
      try {
        return Array.from(sheet.cssRules).map((r) => r.cssText);
      } catch (e) {
        return [];
      }
    })
    .join("\n");
}

function exportCleanHTML() {
  const styleContent = getStylesheetContent();
  const viewerScript = document.getElementById("viewer-script").textContent;

  const tempContainer = document.createElement("div");
  tempContainer.innerHTML =
    document.querySelector("header").outerHTML +
    `<div id="main-content" style="margin-top:32px;">${document.getElementById("main-content").innerHTML}</div>`;

  // Remove all editor-only elements (marked with data-export-remove)
  tempContainer
    .querySelectorAll("[data-export-remove]")
    .forEach((el) => el.remove());
  tempContainer.querySelectorAll("textarea").forEach((el) => el.remove());

  // Clean up remaining drag attributes from contact items
  tempContainer.querySelectorAll(".contact-item").forEach((item) => {
    item.removeAttribute("draggable");
    item
      .querySelectorAll("[style*='cursor']")
      .forEach((el) => el.style.removeProperty("cursor"));
  });

  // Replace date picker with static text
  tempContainer.querySelectorAll(".date-input").forEach((input) => {
    const dateObj = new Date(input.value || DATA.startDate);
    const formatted = dateObj.toLocaleDateString("de-DE");
    const span = document.createElement("span");
    span.style.cssText = "font-size:0.7rem; color:#888;";
    span.textContent = formatted;
    input.replaceWith(span);
  });

  const containerHTML = tempContainer.innerHTML;
  const faviconLink =
    document.querySelector('link[rel="icon"]')?.outerHTML ?? "";
  const startDate = DATA.startDate || "";

  // The only export-specific logic: bake in START_DATE and set up DOMContentLoaded
  const exportScript = [
    "(function() {",
    `  var START_DATE = ${JSON.stringify(startDate)};`,
    "  function calculateDays(animate) {",
    "    if (!START_DATE) { var el = document.getElementById('days-count'); if (el) el.textContent = '0'; return; }",
    "    var start = new Date(START_DATE + 'T00:00:00');",
    "    var now = new Date();",
    "    var berlinNow = new Date(now.getTime() + getBerlinOffset(now));",
    "    start.setHours(0, 0, 0, 0); berlinNow.setHours(0, 0, 0, 0);",
    "    var days = Math.max(0, Math.floor((berlinNow - start) / (1000 * 60 * 60 * 24)));",
    "    if (animate) { animateCounter(days); } else { var el = document.getElementById('days-count'); if (el) el.textContent = days; }",
    "  }",
    "  document.addEventListener('DOMContentLoaded', function() {",
    "    calculateDays(true);",
    "    document.querySelectorAll('.collapsible-section .section-content').forEach(function(el) { el.style.display = 'none'; });",
    "    document.querySelectorAll('.collapse-icon').forEach(function(el) { el.classList.remove('open'); });",
    "  });",
    "})();",
  ].join("\n");

  const htmlParts = [
    "<!DOCTYPE html>",
    '<html lang="de">',
    "<head>",
    '    <meta charset="UTF-8">',
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    "    <title>Mein Notfallplan</title>",
    faviconLink,
    "    <style>",
    styleContent,
    "    </style>",
    "</head>",
    "<body>",
    '    <div class="container">',
    containerHTML,
    "    </div>",
    "<script>",
    viewerScript.trim(),
    exportScript,
    "<" + "/script>",
    "</body>",
    "<" + "/html>",
  ];

  const finalHTML = htmlParts.join("\n");
  const blob = new Blob([finalHTML], {
    type: "text/html; charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Mein-Notfallplan.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  setTimeout(showExportInstructions, 500);
}

function showExportInstructions() {
  document.getElementById("export-modal").style.display = "flex";
}

function hideExportModal() {
  document.getElementById("export-modal").style.display = "none";
}

// ==================== INIT ====================
window.onload = function () {
  loadFromLocalStorage();
  renderAllSections(); // renders all sections, sets icons, contacts, counter, displays
  calculateDays(true);
  document
    .getElementById("editor-textarea")
    .addEventListener("keydown", handleEditorKeydown);
};
