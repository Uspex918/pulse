// $(document).ready(function () {
//   $(".carousel__inner").slick({
//     speed: 1000,
//     //     adaptiveHeight: true,
//     prevArrow:
//       '<button type="button" class="slick-prev"><img src="icons/main_screen/chevron-left-solid.svg" alt=""></button>',
//     nextArrow:
//       '<button type="button" class="slick-next"><img src="icons/main_screen/chevron-right-solid.svg" alt=""></button>',
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },

//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ],
//   });
// });

const slider = tns({
  container: ".carousel__inner",
  items: 1,
  slideBy: "page",
  autoplay: true,
  autoplayTimeout: 5000,
  speed: 1200,
  controls: false,
  nav: false,
  // controlsText: [
  //   '<img src="icons/main_screen/chevron-left-solid.svg" alt="">',
  //   '<img src="icons/main_screen/chevron-right-solid.svg" alt="">',
  // ],
});

document.querySelector(".next").addEventListener("click", function () {
  slider.goTo("next");
});
document.querySelector(".prev").addEventListener("click", function () {
  slider.goTo("prev");
});

$(document).ready(function () {
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );
  // $(".catalog-item__link").each(function (i) {
  //   $(this).on("click", function (e) {
  //     e.preventDefault();
  //     $(".catalog-item__content")
  //       .eq(i)
  //       .toggleClass("catalog-item__content_active");
  //     $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
  //   });
  // });
  // $(".catalog-item__back").each(function (i) {
  //   $(this).on("click", function (e) {
  //     e.preventDefault();
  //     $(".catalog-item__content")
  //       .eq(i)
  //       .toggleClass("catalog-item__content_active");
  //     $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
  //   });
  // });
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  }
  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");
});