function Gallery() {
  const item = $(".js--gal_item");
  const modal = $(".modal");
  const modalClose = $(".js--modal__close");
  const modalCurrentItem = $(".js--modal__content img");
  const prevButton = $(".js--modal__prev");
  const nextButton = $(".js--modal__next");

  this.currentSrc;
  this.currentItem;

  this.openModal = (event) => {
    this.currentItem = $(event.currentTarget);
    this.currentSrc = this.currentItem.find("img").attr("src");
    modal.addClass("active");
    modalCurrentItem.attr("src", this.currentSrc);
  };

  this.closeModal = () => {
    modal.removeClass("active");
  };

  this.nextItem = () => {
    if (this.currentItem.next().length) {
      this.currentItem = this.currentItem.next();
      this.currentSrc = this.currentItem.find("img").attr("src");
      modalCurrentItem.attr("src", this.currentSrc);
    }
  };

  this.prevItem = () => {
    if (this.currentItem.prev().length) {
      this.currentItem = this.currentItem.prev();
      this.currentSrc = this.currentItem.find("img").attr("src");
      modalCurrentItem.attr("src", this.currentSrc);
    }
  };

  item.on("click", this.openModal);
  modalClose.on("click", this.closeModal);
  nextButton.on("click", this.nextItem);
  prevButton.on("click", this.prevItem);
}

new Gallery();
