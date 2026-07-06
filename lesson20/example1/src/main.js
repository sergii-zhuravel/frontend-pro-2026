$(document).ready(function () {
  const slide = {
    width: 300,
    sliderTime: 2000,
    sliderTimerId: null,
    nextSlide() {
      const slider = $(".slider");
      let currentSlide = +slider.data("current");
      currentSlide++;
      if (currentSlide > $(".slider__item").length) {
        currentSlide = 0;
      }
      slider.animate(
        {
          left: -currentSlide * slide.width,
        },
        500,
      );
      slider.data("current", currentSlide);
    },

    startSlider() {
      const slider = $(".slider");

      slider.width($(".slider__item").length * slider.sliderTime);
      slide.sliderTimerId = setInterval(slide.nextSlide, slide.sliderTime);
    },

    stopOnHover() {
      $(".visible").hover(
        () => clearInterval(slide.sliderTimerId),
        () =>
          (slide.sliderTimerId = setInterval(
            slide.nextSlide,
            slide.sliderTime,
          )),
      );
    },
  };

  slide.startSlider();
  slide.stopOnHover();
});
