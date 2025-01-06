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

  // Modal
  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });
  // $(".button_mini").on("click", function () {
  //   $(".overlay, #order").fadeIn("slow");
  // });
  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consulting").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay,#consulting, #order, #thanks").fadeOut("slow");
  });

  function validateForm(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: "Пожалуйста, введите свое имя",
        phone: "Пожалуйста, введите ваш номер телефона",
        email: {
          required: "Пожалуйста, введите свой email",
          email:
            "ваш email адрес (почта) должен быть в формате name@domain.com",
        },
      },
    });
  }
  validateForm("#consulting form");
  validateForm("#order form");
  validateForm("#forma");

  $("input[name=phone]").mask("+7 (999) 999-99-99");

  // Smooth scroll and page up

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  // $("a [href='#up']").on("click", function (event) {
  //   // Make sure this.hash has a value before overriding default behavior
  //   if (this.hash !== "") {
  //     // Prevent default anchor click behavior
  //     event.preventDefault();

  //     // Store hash
  //     var hash = this.hash;

  //     // Using jQuery's animate() method to add smooth page scroll
  //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  //     $("html, body").animate(
  //       {
  //         scrollTop: $(hash).offset().top,
  //       },
  //       800,
  //       function () {
  //         // Add hash (#) to URL when done scrolling (default click behavior)
  //         window.location.hash = hash;
  //       }
  //     );
  //   } // End if
  // });
  new WOW().init();
});
