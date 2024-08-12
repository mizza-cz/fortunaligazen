$(".archive-section__wrapper").slick({
  dots: true,
  infinite: true,
  arrows: false,

  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  autoplay: true,
});

const asideProductsContainer = document.querySelector(".archiveItems");

if (asideProductsContainer) {
  const products = Array.from(document.querySelectorAll(".archiveItem"));
  const buttonMore = document.querySelector(".btnMore");
  let visibleCount = 4;

  function showProducts() {
    products.forEach((product, index) => {
      if (index < visibleCount) {
        product.classList.add("visible");
      } else {
        product.classList.remove("visible");
      }
    });

    if (visibleCount >= products.length) {
      buttonMore.style.display = "none";
    } else {
      buttonMore.style.display = "flex";
    }
  }

  function loadMoreProducts() {
    visibleCount += 4;
    showProducts();
  }

  buttonMore.addEventListener("click", loadMoreProducts);

  showProducts();
}
