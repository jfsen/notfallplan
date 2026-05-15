// ==================== MANAGE MODAL ====================

function showManageModal() {
  const list = document.getElementById("manage-list");
  list.innerHTML = "";

  SECTION_CONFIG.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "section-manage-item";

    if (item.id === "counter") {
      // Fixed counter - no drag, no arrows
      div.style.cursor = "default";
      div.innerHTML = `
                <span style="color:transparent; font-size:1.1rem; flex-shrink:0; user-select:none;">☰</span>
                <input type="checkbox" ${item.visible ? "checked" : ""}
                       onchange="toggleVisibility('${item.id}', this.checked)">
                <div style="flex:1; font-weight:500;">${item.title}</div>`;
    } else {
      // Movable sections
      div.draggable = true;
      div.dataset.index = index;

      const isFirstMovable = index === 1; // Right after counter
      const isLastMovable = index === SECTION_CONFIG.length - 1;

      let itemHTML = `
                <span style="color:#52525b; font-size:1.1rem; cursor:grab; flex-shrink:0;">☰</span>
                <input type="checkbox" ${item.visible ? "checked" : ""}
                       onchange="toggleVisibility('${item.id}', this.checked)">
                <div style="flex:1; font-weight:500; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.title}</div>`;

      if (item.type === "custom") {
        itemHTML += `<button onclick="deleteCustomSection('${item.id}')"
                                     class="manage-item-btn" style="background:#ef4444;" title="Sektion löschen">${SVGs.trash}</button>`;
      }

      // Up / Down buttons (exactly like contacts)
      const upStyle = isFirstMovable ? "opacity:0.3; cursor:not-allowed;" : "";
      const downStyle = isLastMovable ? "opacity:0.3; cursor:not-allowed;" : "";

      itemHTML += `
                <button onclick="moveSection(${index}, -1); event.stopPropagation()"
                        class="manage-item-btn"
                        style="background:#3f3f46; ${upStyle}"
                        ${isFirstMovable ? "disabled" : ""}
                        title="Nach oben verschieben">↑</button>
                <button onclick="moveSection(${index}, 1); event.stopPropagation()"
                        class="manage-item-btn"
                        style="background:#3f3f46; ${downStyle}"
                        ${isLastMovable ? "disabled" : ""}
                        title="Nach unten verschieben">↓</button>`;

      div.innerHTML = itemHTML;

      div.addEventListener("dragstart", handleDragStart);
      div.addEventListener("dragover", handleDragOver);
      div.addEventListener("drop", handleDrop);
      div.addEventListener("dragend", handleDragEnd);
    }

    list.appendChild(div);
  });

  // === Wider modal on desktop ===
  const modal = document.getElementById("manage-modal");
  modal.style.display = "flex";

  const modalContent = modal.querySelector(".modal-content") || modal;
  if (modalContent) {
    modalContent.style.width = "min(94%, 640px)";
    modalContent.style.maxWidth = "640px";
  }
}

function hideManageModal() {
  document.getElementById("manage-modal").style.display = "none";
  renderAllSections();
  renderCounter();
  saveToLocalStorage();
}

function toggleVisibility(id, visible) {
  const item = SECTION_CONFIG.find((s) => s.id === id);
  if (item) item.visible = visible;
}

function isFixedSection(id) {
  return id === "counter";
}

function moveSection(index, dir) {
  const item = SECTION_CONFIG[index];
  if (item.id === "counter") return; // Never move counter

  const newIdx = index + dir;
  if (newIdx < 1 || newIdx >= SECTION_CONFIG.length) return; // Prevent moving before counter
  if (SECTION_CONFIG[newIdx].id === "counter") return;

  [SECTION_CONFIG[index], SECTION_CONFIG[newIdx]] = [
    SECTION_CONFIG[newIdx],
    SECTION_CONFIG[index],
  ];

  showManageModal();
}

// ==================== SECTION DRAG & DROP ====================
let draggedIndex = null;

function handleDragStart(e) {
  draggedIndex = parseInt(e.currentTarget.dataset.index);
  e.currentTarget.style.opacity = "0.4";
  e.dataTransfer.effectAllowed = "move";
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  document.querySelectorAll(".section-manage-item").forEach((item) => {
    item.style.borderTop = "";
    item.style.borderBottom = "";
  });
  const target = e.currentTarget;
  if (parseInt(target.dataset.index) === draggedIndex) return;
  const rect = target.getBoundingClientRect();
  if (e.clientY < rect.top + rect.height / 2) {
    target.style.borderTop = "3px solid #34d399";
  } else {
    target.style.borderBottom = "3px solid #34d399";
  }
}

function handleDragEnd(e) {
  e.currentTarget.style.opacity = "1";
  document.querySelectorAll(".section-manage-item").forEach((item) => {
    item.style.borderTop = "";
    item.style.borderBottom = "";
  });
}

function handleDrop(e) {
  e.preventDefault();
  const targetIndex = parseInt(e.currentTarget.dataset.index);
  if (draggedIndex === null || draggedIndex === targetIndex) return;

  const rect = e.currentTarget.getBoundingClientRect();
  let dropIndex =
    e.clientY > rect.top + rect.height / 2 ? targetIndex + 1 : targetIndex;
  const [movedItem] = SECTION_CONFIG.splice(draggedIndex, 1);
  if (draggedIndex < dropIndex) dropIndex--;
  SECTION_CONFIG.splice(dropIndex, 0, movedItem);

  showManageModal();
}

// ==================== ADD SECTION MODAL ====================

function showAddSectionModal() {
  document.getElementById("new-section-title").value = "";
  document.getElementById("new-section-collapsible").checked = false;
  selectedCustomIcon = "bolt";
  document.getElementById("custom-section-modal").style.display = "flex";
  populateIconPicker();
  setTimeout(() => document.getElementById("new-section-title").focus(), 50);
}

function hideAddSectionModal() {
  document.getElementById("custom-section-modal").style.display = "none";
  // Re-show manage modal if it was open
  const manageModal = document.getElementById("manage-modal");
  if (manageModal?.style.display === "flex") {
    showManageModal();
  }
}

function populateIconPicker() {
  const container = document.getElementById("icon-picker");
  container.innerHTML = "";
  const iconNames = {
    bolt: "Blitz",
    heart: "Herz",
    phonebook: "Telefonbuch",
    toolbox: "Werkzeug",
    dumbbell: "Hantel",
    quote: "Zitat",
    pill: "Tablette",
    medicalbook: "Medizinbuch",
    hospital: "Krankenhaus",
    brain: "Gehirn",
    hands: "Hände",
    group: "Gruppe",
    shield: "Schild",
    parachute: "Fallschirm",
    gauge: "Messer",
    bandage: "Verband",
    pepper: "Pfeffer",
    carrot: "Karotte",
    doctor: "Arzt",
    masks: "Masken",
  };
  Object.keys(PickIcons).forEach((key) => {
    const div = document.createElement("div");
    div.style.cssText = `width:48px;height:48px;display:flex;align-items:center;justify-content:center;background:#18181b;border:2px solid ${key === selectedCustomIcon ? "#34d399" : "transparent"};border-radius:12px;cursor:pointer;`;
    div.title = iconNames[key] || key;
    div.innerHTML = SVGs[key];
    div.onclick = () => {
      selectedCustomIcon = key;
      populateIconPicker();
    };
    container.appendChild(div);
  });
}

// ==================== CUSTOM SECTIONS ====================

function createCustomSection() {
  const title = document.getElementById("new-section-title").value.trim();
  if (!title)
    return showAlert("Bitte gib einen Titel für die neue Sektion ein.");
  const isCollapsible = document.getElementById(
    "new-section-collapsible",
  ).checked;

  const newSection = {
    id: "custom-" + Date.now(),
    title,
    icon: selectedCustomIcon,
    isCollapsible,
    content: "",
  };
  CUSTOM_SECTIONS.push(newSection);
  SECTION_CONFIG.push({
    id: newSection.id,
    title,
    type: "custom",
    visible: true,
  });

  hideAddSectionModal();
  renderAllSections();
  saveToLocalStorage();
  // Re-show manage modal so the new section appears in the list
  const manageModal = document.getElementById("manage-modal");
  if (manageModal?.style.display === "flex") {
    showManageModal();
  }
}

function deleteCustomSection(id) {
  const section = SECTION_CONFIG.find((s) => s.id === id);
  if (!section) return;
  showConfirm(
    `Sektion "${section.title}" wirklich löschen?`,
    () => {
      CUSTOM_SECTIONS = CUSTOM_SECTIONS.filter((s) => s.id !== id);
      SECTION_CONFIG = SECTION_CONFIG.filter((s) => s.id !== id);

      renderAllSections();
      saveToLocalStorage();

      const manageModal = document.getElementById("manage-modal");
      if (manageModal?.style.display === "flex") showManageModal();
    },
    "Löschen",
  );
}

// ==================== PRIVACY INFO MODAL ====================

function showInfoModal() {
  document.getElementById("info-modal").style.display = "flex";
}

function hideInfoModal() {
  document.getElementById("info-modal").style.display = "none";
}

// ── Reusable Confirm / Alert Modal ───────────────────

let confirmCallback = null;

function showConfirm(message, onConfirm, confirmText) {
  document.getElementById("confirm-message").textContent = message;
  document.getElementById("confirm-actions").innerHTML = `
    <button onclick="confirmCancel()" class="modal-btn modal-btn-secondary">Abbrechen</button>
    <button onclick="confirmOk()" class="modal-btn" style="background:#ef4444; font-weight:600;"
            onmouseover="this.style.background='#dc2626'" onmouseout="this.style.background='#ef4444'">${confirmText || "Löschen"}</button>
  `;
  confirmCallback = onConfirm || null;
  document.getElementById("confirm-modal").style.display = "flex";
}

function showAlert(message) {
  document.getElementById("confirm-message").textContent = message;
  document.getElementById("confirm-actions").innerHTML = `
    <button onclick="confirmOk()" class="modal-btn" style="flex:none; background:#3f3f46; color:#e4e4e7; font-weight:600; margin:0 auto; padding:14px 40px;"
            onmouseover="this.style.background='#52525b'" onmouseout="this.style.background='#3f3f46'">OK</button>
  `;
  confirmCallback = null;
  document.getElementById("confirm-modal").style.display = "flex";
  setTimeout(() => {
    const btn = document.querySelector("#confirm-actions button");
    if (btn) btn.focus();
  }, 50);
}

function confirmOk() {
  if (confirmCallback) confirmCallback();
  document.getElementById("confirm-modal").style.display = "none";
  confirmCallback = null;
}

function confirmCancel() {
  document.getElementById("confirm-modal").style.display = "none";
  confirmCallback = null;
}
