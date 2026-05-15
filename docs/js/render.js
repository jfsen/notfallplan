// ==================== FORMATTING ====================

function formatContent(text) {
  if (!text || typeof text !== "string") return "";

  const lines = text.split("\n");
  let html = "";
  let inUL = false;
  let inOL = false;
  let olCounter = 1;

  const closeOpenList = () => {
    if (inUL) {
      html += "</ul>";
      inUL = false;
    }
    if (inOL) {
      html += "</ol>";
      inOL = false;
    }
    olCounter = 1;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (/^[-*]\s+/.test(trimmed)) {
      if (inOL) closeOpenList();
      if (!inUL) {
        html += '<ul style="margin: 12px 0 12px 8px; padding-left: 20px;">';
        inUL = true;
      }
      const content = applyInlineFormatting(trimmed.replace(/^[-*]\s+/, ""));
      html += `<li style="margin-bottom: 6px; color: #e4e4e7;">${content}</li>`;
    } else if (/^\d+[.)]\s+/.test(trimmed)) {
      if (inUL) closeOpenList();

      if (!inOL) {
        html += '<ol style="margin: 12px 0 12px 8px; padding-left: 20px;">';
        inOL = true;
      }

      const content = applyInlineFormatting(trimmed.replace(/^\d+[.)]\s+/, ""));
      html += `<li style="margin-bottom: 6px; color: #e4e4e7;">${content}</li>`;
    } else {
      // Paragraph or blank line
      closeOpenList();
      if (trimmed === "") {
        html += "<br>";
      } else {
        const content = applyInlineFormatting(trimmed);
        html += `<p style="margin: 0px 0;">${content}</p>`;
      }
    }
  }

  closeOpenList();
  return html || text.replace(/\n/g, "<br>");
}

// Helper: apply inline markdown
function applyInlineFormatting(str) {
  if (!str) return "";

  // Order is important: bold before italic
  str = str.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); // **bold**
  str = str.replace(/__(.+?)__/g, "<u>$1</u>"); // __underline__
  str = str.replace(/\*([^*]+?)\*/g, "<em>$1</em>"); // *italic*
  str = str.replace(/_([^_]+?)_/g, "<em>$1</em>"); // _italic_ (alternative)

  // Links — applied last so that [**text**](url) works
  str = str.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
    const safeUrl = url.replace(/"/g, "&quot;");
    return `<a href="${safeUrl}" style="color:#34d399; text-decoration:underline;">${text}</a>`;
  });

  return str;
}

// ==================== RENDER ====================

function renderAllSections() {
  const container = document.getElementById("main-content");
  container.innerHTML = "";

  SECTION_CONFIG.forEach((config) => {
    if (!config.visible) return;

    if (config.type === "counter") {
      return; // rendered separately in the header
    }

    if (config.type === "breathing") {
      container.innerHTML += `
            <div class="breathing-section" id="breathing-section">
                <div class="breathing-burger-wrapper">
                    <button class="breathing-burger-btn" onclick="event.stopPropagation(); toggleBreathingMenu()" title="Atemübung wählen">
                        ${SVGs.burger}
                    </button>
                    <div class="breathing-menu" id="breathing-menu" style="display:none;">
                        ${BREATHING_EXERCISES.map(
                          (ex) => `
                        <button class="breathing-menu-item ${ex.id === currentBreathingExercise ? "active" : ""}"
                                onclick="event.stopPropagation(); switchBreathingExercise('${ex.id}')">
                            <span class="breathing-menu-item-title">${ex.title}</span>
                            <span class="breathing-menu-item-desc">${ex.desc}</span>
                        </button>
                        `,
                        ).join("")}
                    </div>
                </div>
                <button onclick="toggleBoxBreathing()" id="breathing-circle-btn" class="breathing-circle-btn">
                    <div id="breathing-circle" class="breathing-circle">
                        <span id="breathing-icon" style="font-size: 2.8rem; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">${SVGs.wind}</span>
                    </div>
                    <div id="breathing-btn-text" style="margin-top: 16px; font-weight: 600; font-size: 1.25rem; color: #34d399;"></div>
                </button>
                <div id="breathing-text" style="margin-top: 28px; font-weight: 600; color:#34d399; font-size: 1.3rem;"></div>
            </div>`;
    } else if (config.type === "custom") {
      const sec = CUSTOM_SECTIONS.find((s) => s.id === config.id);
      if (sec) renderCustomSection(sec, container);
    } else {
      container.innerHTML += createDefaultSection(config);
    }
  });

  setDefaultIcons();
  renderContacts();
  renderCounter();
  refreshDisplays();
}

function renderCounter() {
  const wrapper = document.getElementById("counter-wrapper");
  const config = SECTION_CONFIG.find((s) => s.id === "counter");
  if (wrapper && config)
    wrapper.style.display = config.visible ? "block" : "none";
}

function setDefaultIcons() {
  const iconMap = {
    ausloeser: SVGs.bolt,
    gruende: SVGs.heart,
    kontakte: SVGs.phonebook,
    phone: SVGs.phone,
    skills: SVGs.toolbox,
    staerken: SVGs.dumbbell,
    mottos: SVGs.quote,
    angenehmes: SVGs.shield,
    gear: SVGs.gear,
    plus: SVGs.plus,
    info: SVGs.info,
    trash: SVGs.trash,
    pen: SVGs.pen,
  };
  Object.entries(iconMap).forEach(([key, svg]) => {
    const el = document.getElementById(`icon-${key}`);
    if (el) el.innerHTML = svg;
  });
}

// Updates all text content displays without re-rendering the full section structure.
function refreshDisplays() {
  [
    "ausloeser",
    "gruende",
    "skills",
    "staerken",
    "mottos",
    "angenehmes",
  ].forEach((key) => {
    const el = document.getElementById(key + "-display");
    if (el) el.innerHTML = formatContent(DATA[key] || "");
  });
  CUSTOM_SECTIONS.forEach((section) => {
    const el = document.getElementById(`display-${section.id}`);
    if (el) el.innerHTML = formatContent(section.content || "");
  });
}

function createDefaultSection(config) {
  const key = config.id;

  if (key === "kontakte") {
    return `
        <div class="section" id="section-kontakte">
            <div class="section-header">
                <div style="display:flex; align-items:center; gap:12px;">
                    <span id="icon-kontakte">${SVGs.phonebook}</span>
                    <span>${config.title}</span>
                </div>
                <button class="edit-btn" data-export-remove onclick="showAddContactModal()" title="Neuen Kontakt hinzufügen">${SVGs.plus}</button>
            </div>
            <div class="section-content" id="kontakte-list"></div>
        </div>`;
  }

  // "Angenehmes" is collapsible
  if (key === "angenehmes") {
    return `
        <div class="section collapsible-section" id="section-${key}">
            <div class="section-header" onclick="toggleCollapse('${key}')">
                <div style="display:flex; align-items:center; gap:12px;">
                    <span id="icon-${key}"></span>
                    <span>${config.title}</span>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <button class="edit-btn" data-export-remove onclick="event.stopPropagation(); openEditor('${key}')" title="Inhalt bearbeiten">${SVGs.pen}</button>
                    <span id="collapse-icon-${key}" class="collapse-icon">›</span>
                </div>
            </div>
            <div class="section-content" id="content-${key}" style="display:none;">
                <div id="${key}-display" class="content-display"></div>
            </div>
        </div>`;
  }

  // All other default sections (non-collapsible)
  return `
    <div class="section" id="section-${key}">
        <div class="section-header">
            <div style="display:flex; align-items:center; gap:12px;">
                <span id="icon-${key}"></span>
                <span>${config.title}</span>
            </div>
            <button class="edit-btn" data-export-remove onclick="openEditor('${key}')" title="Inhalt bearbeiten">${SVGs.pen}</button>
        </div>
        <div class="section-content">
            <div id="${key}-display" class="content-display"></div>
        </div>
    </div>`;
}

function renderCustomSection(section, container) {
  const iconSVG = SVGs[section.icon] || SVGs.bolt;
  let html = `<div class="section custom-section ${section.isCollapsible ? "collapsible-section" : ""}" id="section-${section.id}">`;

  if (section.isCollapsible) {
    html += `
        <div class="section-header" onclick="toggleCollapse('${section.id}')">
            <div style="display:flex; align-items:center; gap:12px;">
                <span>${iconSVG}</span>
                <span>${section.title}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
                <button class="edit-btn" data-export-remove style="background:#ef4444;" onclick="event.stopPropagation(); deleteCustomSection('${section.id}')" title="Sektion löschen">${SVGs.trash}</button>
                <button class="edit-btn" data-export-remove onclick="event.stopPropagation(); openEditor('${section.id}', true)" title="Inhalt bearbeiten">${SVGs.pen}</button>
                <span id="collapse-icon-${section.id}" class="collapse-icon">›</span>
            </div>
        </div>
        <div class="section-content" id="content-${section.id}" style="display:none;">
            <div id="display-${section.id}" class="content-display">${formatContent(section.content)}</div>
        </div>`;
  } else {
    html += `
        <div class="section-header">
            <div style="display:flex; align-items:center; gap:12px;">
                <span>${iconSVG}</span>
                <span>${section.title}</span>
            </div>
            <div style="display:flex; gap:8px;">
                <button class="edit-btn" data-export-remove style="background:#ef4444;" onclick="deleteCustomSection('${section.id}')" title="Sektion löschen">${SVGs.trash}</button>
                <button class="edit-btn" data-export-remove onclick="openEditor('${section.id}', true)" title="Inhalt bearbeiten">${SVGs.pen}</button>
            </div>
        </div>
        <div class="section-content">
            <div id="display-${section.id}" class="content-display">${formatContent(section.content)}</div>
        </div>`;
  }

  html += `</div>`;
  container.innerHTML += html;
}

function renderContacts() {
  const container = document.getElementById("kontakte-list");
  if (!container) return;
  container.innerHTML = "";

  if (KONTAKTE.length === 0) {
    container.innerHTML = `<p style="color:#888; text-align:center; padding:40px 20px;">Noch keine Notfallkontakte hinzugefügt.</p>`;
  } else {
    KONTAKTE.forEach((k, i) => {
      const div = document.createElement("div");
      div.className = "contact-item";
      div.draggable = true;
      div.dataset.index = i;
      const isFirst = i === 0;
      const isLast = i === KONTAKTE.length - 1;
      div.innerHTML = `
                <div style="display:flex; align-items:center; gap:10px; flex:1; min-width:0; cursor:grab;">
                    <div data-export-remove style="display:flex; flex-direction:column; align-items:center; gap:1px; flex-shrink:0;">
                        <button onclick="moveContact(${i}, -1); event.stopPropagation()"
                                class="manage-item-btn"
                                style="background:#3f3f46; height:24px; min-width:24px; font-size:0.8rem; line-height:1; padding:0; ${isFirst ? "opacity:0.3; cursor:not-allowed;" : ""}"
                                ${isFirst ? "disabled" : ""}
                                title="Nach oben verschieben">↑</button>
                        <button onclick="moveContact(${i}, 1); event.stopPropagation()"
                                class="manage-item-btn"
                                style="background:#3f3f46; height:24px; min-width:24px; font-size:0.8rem; line-height:1; padding:0; ${isLast ? "opacity:0.3; cursor:not-allowed;" : ""}"
                                ${isLast ? "disabled" : ""}
                                title="Nach unten verschieben">↓</button>
                    </div>
                    <div style="min-width:0; overflow:hidden;">
                        <div style="font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${k.name}</div>
                        <a href="tel:${k.tel}" style="color:#34d399;">${k.tel}</a>
                    </div>
                </div>
                <div style="display:flex; gap:8px; align-items:center; flex-shrink:0;">
                    <a href="tel:${k.tel}" class="contact-call-btn" title="Anrufen">${SVGs.phone}</a>
                    <button data-export-remove onclick="deleteContact(${i}); event.stopPropagation()"
                            class="contact-delete-btn" title="Kontakt löschen">${SVGs.trash}</button>
                </div>`;
      div.addEventListener("dragstart", handleContactDragStart);
      div.addEventListener("dragover", handleContactDragOver);
      div.addEventListener("drop", handleContactDrop);
      div.addEventListener("dragend", handleContactDragEnd);
      container.appendChild(div);
    });
  }

  const addBtn = document.createElement("button");
  addBtn.className = "add-contact";
  addBtn.textContent = "+ Neuen Kontakt hinzufügen";
  addBtn.dataset.exportRemove = "";
  addBtn.onclick = showAddContactModal;
  container.appendChild(addBtn);
}
