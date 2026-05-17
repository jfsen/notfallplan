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

  // Replace hardcoded anniversary badge text with translated version
  var translatedBadgeTemplate = t("anniversary.badge");
  viewerScript = viewerScript.replace(
    /const label =[\s\S]*?\`\$\{anniversaryYear\}[^;]*?;/,
    'const label = "' +
      translatedBadgeTemplate.replace(/"/g, '\\"') +
      '\".replace("{0}", anniversaryYear);',
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

  // Embed full user data as JSON for import functionality
  var exportData = {
    version: 1,
    startDate: DATA.startDate || "",
    sectionConfig: SECTION_CONFIG,
    data: DATA,
    kontakte: KONTAKTE,
    customSections: CUSTOM_SECTIONS,
    language: currentLang,
  };
  var dataJSON = JSON.stringify(exportData, null, 2);

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
    '<script type="application/json" id="notfallplan-data">',
    dataJSON,
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

// ==================== IMPORT ====================

function triggerImport() {
  document.getElementById("import-file-input").click();
}

function importFromHTML(event) {
  var file = event.target.files && event.target.files[0];
  // Reset input immediately so the same file can be selected again later
  resetImportInput();
  if (!file) {
    showAlert(t("import.select_file"));
    return;
  }

  showConfirm(
    t("import.confirm"),
    function () {
      readAndImportFile(file);
    },
    t("import.title"),
  );
}

function resetImportInput() {
  var input = document.getElementById("import-file-input");
  if (input) input.value = "";
}

function readAndImportFile(file) {
  var reader = new FileReader();
  reader.onload = function (e) {
    try {
      var html = e.target.result;
      var data = extractNotfallplanData(html);
      if (!data) {
        showAlert(t("import.no_data"));
        resetImportInput();
        return;
      }
      applyImportedData(data);
      showAlert(t("import.success"));
    } catch (err) {
      console.error("Import error:", err);
      showAlert(t("import.error"));
    }
    resetImportInput();
  };
  reader.onerror = function () {
    showAlert(t("import.error"));
    resetImportInput();
  };
  reader.readAsText(file);
}

function extractNotfallplanData(html) {
  // Try to extract the JSON data block from the exported file
  var jsonMatch = html.match(
    /<script\s+type="application\/json"\s+id="notfallplan-data"\s*>([\s\S]*?)<\/script>/i,
  );
  if (jsonMatch && jsonMatch[1]) {
    var data = JSON.parse(jsonMatch[1].trim());
    if (data && typeof data === "object" && data.version) {
      return data;
    }
  }

  // Fallback: try to find any JSON block with notfallplan data
  var altMatch = html.match(/"notfallplan_data"\s*:\s*({[\s\S]*?})\s*[,;\n}]/i);
  if (altMatch) {
    try {
      return JSON.parse(altMatch[1]);
    } catch (e) {
      // ignore
    }
  }

  return null;
}

function applyImportedData(data) {
  // Restore start date
  if (data.startDate) {
    DATA.startDate = data.startDate;
  }

  // Restore section config (visibility + order)
  if (Array.isArray(data.sectionConfig) && data.sectionConfig.length > 0) {
    SECTION_CONFIG = data.sectionConfig;
  }

  // Restore section data (content for default sections)
  if (data.data && typeof data.data === "object") {
    var defaultKeys = [
      "ausloeser",
      "gruende",
      "skills",
      "staerken",
      "mottos",
      "angenehmes",
    ];
    defaultKeys.forEach(function (key) {
      if (data.data[key] !== undefined) {
        DATA[key] = data.data[key];
      }
    });
  }

  // Restore contacts
  if (Array.isArray(data.kontakte)) {
    KONTAKTE = data.kontakte;
  }

  // Restore custom sections
  if (Array.isArray(data.customSections)) {
    CUSTOM_SECTIONS = data.customSections;
  }

  // Restore language if available and different from current
  if (data.language && data.language !== currentLang) {
    setLanguage(data.language);
  } else {
    renderAllSections();
    applyDynamicTranslations();
  }

  // Persist everything to localStorage
  saveToLocalStorage();

  // Always recalculate days and update date input after import
  calculateDays(true);
  var dateInput = document.getElementById("start-date");
  if (dateInput && data.startDate) {
    dateInput.value = data.startDate;
  }

  // Re-render the counter visibility
  renderCounter();
}

// ==================== INIT ====================
window.onload = function () {
  loadFromLocalStorage();
  window._NOTFALLPLAN_DATA = DATA; // expose for viewer functions

  // Initialize language — setLanguage calls translatePage() which
  // already runs renderAllSections() and renderContacts() internally.
  setLanguage(detectLanguage());
  calculateDays(true);
  document
    .getElementById("editor-textarea")
    .addEventListener("keydown", handleEditorKeydown);
};
