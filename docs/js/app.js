// ==================== DAY COUNTER ====================

function calculateDays(animate = false) {
  if (!DATA.startDate) {
    document.getElementById("days-count").textContent = "0";
    return;
  }
  const todayBerlin = new Date().toLocaleDateString("en-CA", {
    timeZone: "Europe/Berlin",
  });
  const diff =
    new Date(todayBerlin + "T00:00:00Z") -
    new Date(DATA.startDate + "T00:00:00Z");
  const days = Math.max(0, Math.floor(diff / 86400000));
  if (animate) {
    animateCounter(days);
  } else {
    document.getElementById("days-count").textContent = days;
  }
  checkAnniversary();
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
  // Get viewer script and replace BREATHING_EXERCISES with translated version
  var viewerScript = document.getElementById("viewer-script").textContent;
  var translatedEx = getTranslatedBreathingExercises();
  var exercisesJSON = JSON.stringify(translatedEx, null, 4);
  // Match from "const BREATHING_EXERCISES = [" to the first "];" at the top level
  viewerScript = viewerScript.replace(
    /const BREATHING_EXERCISES = \[[\s\S]*?\];/,
    "const BREATHING_EXERCISES = " + exercisesJSON + ";",
  );

  const tempContainer = document.createElement("div");
  tempContainer.innerHTML =
    document.querySelector("header").outerHTML +
    `<canvas id="confetti-canvas"></canvas>` +
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
    "  window._NOTFALLPLAN_DATA = { startDate: START_DATE };",
    "  function calculateDays(animate) {",
    "    if (!START_DATE) { var el = document.getElementById('days-count'); if (el) el.textContent = '0'; return; }",
    "    var todayBerlin = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Berlin' });",
    "    var diff = new Date(todayBerlin + 'T00:00:00Z') - new Date(START_DATE + 'T00:00:00Z');",
    "    var days = Math.max(0, Math.floor(diff / 86400000));",
    "    if (animate) { animateCounter(days); } else { var el = document.getElementById('days-count'); if (el) el.textContent = days; }",
    "    if (typeof checkAnniversary === 'function') checkAnniversary();",
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
    '<html lang="' + currentLang + '">',
    "<head>",
    '    <meta charset="UTF-8">',
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    "    <title>" + t("app.title") + "</title>",
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
  a.download =
    currentLang === "de" ? "Mein-Notfallplan.html" : "My-Emergency-Plan.html";
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
  window._NOTFALLPLAN_DATA = DATA; // expose for viewer functions

  // Detect language
  var detectedLang = detectLanguage();

  // If English is detected and data hasn't been customized yet
  // (still equals the German default), swap to the English default.
  if (
    detectedLang === "en" &&
    DATA.angenehmes === TRANSLATIONS.de["data.angenehmes_default"]
  ) {
    DATA.angenehmes = TRANSLATIONS.en["data.angenehmes_default"];
  }

  // Initialize language — setLanguage calls translatePage() which
  // already runs renderAllSections() and renderContacts() internally.
  setLanguage(detectedLang);
  calculateDays(true);
  document
    .getElementById("editor-textarea")
    .addEventListener("keydown", handleEditorKeydown);
};
