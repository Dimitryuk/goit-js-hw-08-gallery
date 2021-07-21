export const x = modalWindowRefs.galleryRef.addEventListener("click", onGalleryClick);

export function onGalleryClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "IMG") return;

  onModalOpen();
}
export function onModalOpen() {
  modalWindowRefs.lightboxRef.classList.add("is-open");
  modalWindowRefs.lightboxImageRef.src =
    event.target.getAttribute("data-source");
  modalWindowRefs.lightboxImageRef.alt = event.target.getAttribute("alt");
  modalWindowRefs.lightboxButtonCloseRef.addEventListener(
    "click",
    onModalClose
  );
  window.addEventListener("keydown", onEscPressClose);
}

