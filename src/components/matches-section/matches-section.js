$(document).ready(function () {
  // Для каждого слайдера с классом .matches-section__slider
  $(".matches-section__slider").each(function () {
    var actualSlide = parseInt($(this).attr("data-actual"), 10);

    var initialSlide = actualSlide ? actualSlide - 1 : 0;

    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      fade: true,
      cssEase: "linear",
      swipeToSlide: true,
      initialSlide: initialSlide,
      prevArrow:
        '<button class="matches__btn matches__btnprev"><img src="/build/images/ico/arrow-left.svg" loading="lazy" alt="" /></button>',
      nextArrow:
        '<button class="matches__btn matches__btnnext"><img src="/build/images/ico/arrow-right.svg" loading="lazy" alt="" /></button>',
    });
  });
});
