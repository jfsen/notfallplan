// ==================== CONTACT DRAG & DROP ====================
let draggedContactIndex = null;

function handleContactDragStart(e) {
    draggedContactIndex = parseInt(e.currentTarget.dataset.index);
    e.currentTarget.style.opacity = "0.4";
    e.dataTransfer.effectAllowed = "move";
}

function handleContactDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    document.querySelectorAll(".contact-item").forEach((item) => {
        item.style.borderTop = "";
        item.style.borderBottom = "";
    });
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.clientY < rect.top + rect.height / 2) {
        e.currentTarget.style.borderTop = "3px solid #34d399";
    } else {
        e.currentTarget.style.borderBottom = "3px solid #34d399";
    }
}

function handleContactDrop(e) {
    e.preventDefault();
    const targetIndex = parseInt(e.currentTarget.dataset.index);
    if (
        draggedContactIndex === null ||
        draggedContactIndex === targetIndex
    )
        return;

    const rect = e.currentTarget.getBoundingClientRect();
    let dropIndex =
        e.clientY > rect.top + rect.height / 2
            ? targetIndex + 1
            : targetIndex;
    const [moved] = KONTAKTE.splice(draggedContactIndex, 1);
    if (draggedContactIndex < dropIndex) dropIndex--;
    KONTAKTE.splice(dropIndex, 0, moved);

    saveToLocalStorage();
    renderContacts();
}

function handleContactDragEnd(e) {
    e.currentTarget.style.opacity = "1";
    document.querySelectorAll(".contact-item").forEach((item) => {
        item.style.borderTop = "";
        item.style.borderBottom = "";
    });
}

// ==================== CONTACTS ====================

function showAddContactModal() {
    document.getElementById("modal-name").value = "";
    document.getElementById("modal-tel").value = "";
    document.getElementById("contact-modal").style.display = "flex";
    setTimeout(
        () => document.getElementById("modal-name").focus(),
        50,
    );
}
function hideAddContactModal() {
    document.getElementById("contact-modal").style.display = "none";
}
function addContactConfirm() {
    const name = document.getElementById("modal-name").value.trim();
    const tel = document.getElementById("modal-tel").value.trim();
    if (name && tel) {
        KONTAKTE.push({ name, tel });
        renderContacts();
        saveToLocalStorage();
        hideAddContactModal();
    }
}
function deleteContact(index) {
    KONTAKTE.splice(index, 1);
    renderContacts();
    saveToLocalStorage();
}
