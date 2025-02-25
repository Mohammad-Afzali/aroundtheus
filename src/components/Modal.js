export default class Modal {
  constructor({modalSelector}) {
    this._modalElement = document.querySelector(modalSelector);
    this._modalClose = this._modalElement.querySelector(
      ".modal__close"
    );
  }
  open() {
      this._modalElement.classList.add("modal_opened");
      document.addEventListener("keydown", this._handleEscClose);
      document.addEventListener("mousedown", this._handlecloseModalByClickOff);
    }
   
    close() {
      this._modalElement.classList.remove("modal_opened");
      document.removeEventListener("keydown", this._handleEscClose);
      document.removeEventListener("mousedown", this._handlecloseModalByClickOff);
    }
  
    _handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    };
  
    _handlecloseModalByClickOff = (evt) => {
      if (evt.target.classList.contains("modal")) {
        this.close();
      }
    }
  
    setEventListeners() {
      this._modalClose.addEventListener("click", () => {
        this.close();
      });
    }
  }