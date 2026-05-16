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
  if (draggedContactIndex === null || draggedContactIndex === targetIndex)
    return;

  const rect = e.currentTarget.getBoundingClientRect();
  let dropIndex =
    e.clientY > rect.top + rect.height / 2 ? targetIndex + 1 : targetIndex;
  const [moved] = KONTAKTE.splice(draggedContactIndex, 1);
  if (draggedContactIndex < dropIndex) dropIndex--;
  KONTAKTE.splice(dropIndex, 0, moved);

  saveToLocalStorage();
  renderContacts();
  applyDynamicTranslations();
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
  setTimeout(() => document.getElementById("modal-name").focus(), 50);
}
function hideAddContactModal() {
  document.getElementById("contact-modal").style.display = "none";
}
function normalizeTel(raw) {
  // Strip common formatting characters (spaces, dashes, parens, dots, slashes)
  let t = raw.replace(/[\s\-()./]/g, "");
  // Handle the German "+49 (0)30 ..." pattern → "+4930 ..."
  t = t.replace(/^(\+49|0049)0/, "$1");
  return t;
}

function addContactConfirm() {
  const name = document.getElementById("modal-name").value.trim();
  const rawTel = document.getElementById("modal-tel").value.trim();

  if (!name) return;

  const normalized = normalizeTel(rawTel);
  const digitCount = (normalized.match(/\d/g) || []).length;

  const validChars = /^\+?\d+$/.test(normalized);
  const validLength =
    digitCount >= 6 &&
    digitCount <= 15 &&
    !(normalized.startsWith("+") && digitCount < 7) &&
    !(normalized.startsWith("0") && digitCount > 14);

  if (!validChars || !validLength) {
    showAlert(t("contacts.invalid_number"));
    return;
  }

  KONTAKTE.push({ name, tel: normalized });
  renderContacts();
  applyDynamicTranslations();
  saveToLocalStorage();
  hideAddContactModal();
}
function deleteContact(index) {
  KONTAKTE.splice(index, 1);
  renderContacts();
  applyDynamicTranslations();
  saveToLocalStorage();
}

function moveContact(index, dir) {
  const newIdx = index + dir;
  if (newIdx < 0 || newIdx >= KONTAKTE.length) return;
  [KONTAKTE[index], KONTAKTE[newIdx]] = [KONTAKTE[newIdx], KONTAKTE[index]];
  saveToLocalStorage();
  renderContacts();
  applyDynamicTranslations();
}
