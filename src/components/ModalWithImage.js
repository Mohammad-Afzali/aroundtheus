import Modal from "./Modal.js";

export default class ModalWithImage extends Modal {
  constructor(modalSelector) {gi
    super({ modalSelector });
    this._previewImage = this._modalElement.querySelector(".modal__image");
    this._previewImageTitle = this._modalElement.querySelector(
      ".modal__image-preview"
    );
  }

  open(name, link) {
    this._previewImage.src = link;
    this._previewImage.alt = name;
    console.log(this._previewImageTitle);
    this._previewImageTitle.textContent = name;
    super.open();
  }
}