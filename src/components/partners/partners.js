$(".partners__inner").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
    '<button class="partners__btn partners__btnprev"><img src="images/ico/arrow-left.svg" loading="lazy" alt="" /></button> ',
  nextArrow:
    ' <button class="partners__btn  partners__btnnext"><img src="images/ico/arrow-right.svg" loading="lazy" alt="" /></button>',
  responsive: [
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
