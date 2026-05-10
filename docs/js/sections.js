// ==================== MANAGE MODAL ====================

function showManageModal() {
    const list = document.getElementById("manage-list");
    list.innerHTML = "";

    SECTION_CONFIG.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "section-manage-item";

        if (item.id === "counter") {
            div.style.cursor = "default";
            div.innerHTML = `
                <span style="color:transparent; font-size:1.1rem; flex-shrink:0; user-select:none;">☰</span>
                <input type="checkbox" ${item.visible ? "checked" : ""}
                       onchange="toggleVisibility('${item.id}', this.checked)">
                <div style="flex:1; font-weight:500;">${item.title}</div>`;
        } else {
            div.draggable = true;
            div.dataset.index = index;

            let itemHTML = `
                <span style="color:#52525b; font-size:1.1rem; cursor:grab; flex-shrink:0;">☰</span>
                <input type="checkbox" ${item.visible ? "checked" : ""}
                       onchange="toggleVisibility('${item.id}', this.checked)">
                <div style="flex:1; font-weight:500; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.title}</div>`;

            if (item.type === "custom") {
                itemHTML += `<button onclick="deleteCustomSection('${item.id}')"
                                     class="manage-item-btn" style="background:#ef4444;">🗑</button>`;
            }

            itemHTML += `
                <button onclick="moveSection(${index}, -1)" class="manage-item-btn" style="background:#3f3f46;">↑</button>
                <button onclick="moveSection(${index},  1)" class="manage-item-btn" style="background:#3f3f46;">↓</button>`;

            div.innerHTML = itemHTML;
            div.addEventListener("dragstart", handleDragStart);
            div.addEventListener("dragover", handleDragOver);
            div.addEventListener("drop", handleDrop);
            div.addEventListener("dragend", handleDragEnd);
        }

        list.appendChild(div);
    });

    document.getElementById("manage-modal").style.display = "flex";
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
    const newIdx = index + dir;
    if (newIdx < 0 || newIdx >= SECTION_CONFIG.length) return;
    if (
        isFixedSection(SECTION_CONFIG[index].id) ||
        isFixedSection(SECTION_CONFIG[newIdx].id)
    )
        return;
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
    document
        .querySelectorAll(".section-manage-item")
        .forEach((item) => {
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
    document
        .querySelectorAll(".section-manage-item")
        .forEach((item) => {
            item.style.borderTop = "";
            item.style.borderBottom = "";
        });
}

function handleDrop(e) {
    e.preventDefault();
    const targetIndex = parseInt(e.currentTarget.dataset.index);
    if (draggedIndex === null || draggedIndex === targetIndex)
        return;

    const rect = e.currentTarget.getBoundingClientRect();
    let dropIndex =
        e.clientY > rect.top + rect.height / 2
            ? targetIndex + 1
            : targetIndex;
    const [movedItem] = SECTION_CONFIG.splice(draggedIndex, 1);
    if (draggedIndex < dropIndex) dropIndex--;
    SECTION_CONFIG.splice(dropIndex, 0, movedItem);

    showManageModal();
}

// ==================== ADD SECTION MODAL ====================

function showAddSectionModal() {
    document.getElementById("new-section-title").value = "";
    document.getElementById("new-section-collapsible").checked =
        false;
    selectedCustomIcon = "bolt";
    document.getElementById("custom-section-modal").style.display =
        "flex";
    populateIconPicker();
    setTimeout(
        () => document.getElementById("new-section-title").focus(),
        50,
    );
}

function hideAddSectionModal() {
    document.getElementById("custom-section-modal").style.display =
        "none";
}

function populateIconPicker() {
    const container = document.getElementById("icon-picker");
    container.innerHTML = "";
    Object.keys(SVGs).forEach((key) => {
        const div = document.createElement("div");
        div.style.cssText = `width:48px;height:48px;display:flex;align-items:center;justify-content:center;background:#18181b;border:2px solid ${key === selectedCustomIcon ? "#34d399" : "transparent"};border-radius:12px;cursor:pointer;`;
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
    const title = document
        .getElementById("new-section-title")
        .value.trim();
    if (!title) return alert("Titel eingeben!");
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
}

function deleteCustomSection(id) {
    const section = SECTION_CONFIG.find((s) => s.id === id);
    if (!section) return;
    if (!confirm(`Sektion "${section.title}" wirklich löschen?`))
        return;

    CUSTOM_SECTIONS = CUSTOM_SECTIONS.filter((s) => s.id !== id);
    SECTION_CONFIG = SECTION_CONFIG.filter((s) => s.id !== id);

    renderAllSections();
    saveToLocalStorage();

    const manageModal = document.getElementById("manage-modal");
    if (manageModal?.style.display === "flex") showManageModal();
}
