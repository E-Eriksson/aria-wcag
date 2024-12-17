const menyBtn = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");

menyBtn.addEventListener("click", () => {
  if (menuContent.hasAttribute("hidden")) {
    menuContent.removeAttribute("hidden");
  } else {
    menuContent.setAttribute("hidden", true);
  }
});

const modal = document.querySelector("#accessibleModal");
const openModal = document.querySelector("#openModalBtn");
const closeModal = document.querySelector("#closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
  modalOverlay.style.display = "block";
  modalOverlay.ariaHidden = "false";
  closeModal.focus();
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
  modalOverlay.ariaHidden = "true";
  openModal.focus();
});

const dialog = document.getElementById("accessibleDialog");
const openDialog = document.getElementById("openDialogBtn");
const closeDialog = document.getElementById("closeDialogBtn");

openDialog.addEventListener("click", () => {
  dialog.showModal();
  dialog.ariaHidden = "false";
});

closeDialog.addEventListener("click", () => {
  dialog.close();
  dialog.ariaHidden = "true";
});
