// Approach 1:

// document.querySelector(".js--open").addEventListener("click", function () {
//   document.querySelector(".modal").style.display = "block";
// });

// document
//   .querySelector(".js--modal__close")
//   .addEventListener("click", function () {
//     document.querySelector(".modal").style.display = "none";
//   });

// window.addEventListener("click", function (event) {
//   if (event.target === document.querySelector(".modal")) {
//     document.querySelector(".modal").style.display = "none";
//   }
// });

// document.querySelector(".js--open2").addEventListener("click", function () {
//   document.querySelector(".modal").style.display = "block";
// });

// const modalSelector = ".js--modal";

// const modal = document.querySelector(modalSelector);

// function init(openSelector, closeSelector) {
//   const openElement = document.querySelector(openSelector);
//   openElement.addEventListener("click", openModal);

//   const closeElement = document.querySelector(closeSelector);
//   closeElement.addEventListener("click", closeModal);

//   window.addEventListener("click", (event) => closeModalOutside(event));
// }

// function openModal() {
//   modal.style.display = "block";
// }

// function closeModal() {
//   modal.style.display = "none";
// }
// function closeModalOutside(event) {
//   if (event.target === modal) {
//     closeModal();
//   }
// }

// init(".js--open", ".js--modal__close");

//////////
const modalFirst = {
  init(modalSelector, openSelector, closeSelector) {
    this.modal = document.querySelector(modalSelector);

    const openElement = document.querySelector(openSelector);
    openElement.addEventListener("click", this.open.bind(this));

    const closeElement = document.querySelector(closeSelector);
    closeElement.addEventListener("click", this.close.bind(this));

    window.addEventListener("click", (event) => this.closeModalOutside(event));
  },

  open() {
    this.modal.style.display = "block";
  },

  close() {
    this.modal.style.display = "none";
  },

  closeModalOutside(event) {
    if (event.target === this.modal) {
      this.close();
    }
  },
};

modalFirst.init(".js--modal", ".js--open", ".js--modal__close");
modalFirst.init(".js--modal", ".js--open2", ".js--modal__close");
