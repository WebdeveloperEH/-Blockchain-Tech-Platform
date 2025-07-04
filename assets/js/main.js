(function ($) {
  "user strict";
  // Preloader Js
  $(window).on("load", function () {
    $(".overlayer").fadeOut(1000);
    var img = $(".bg_img");
    img.css("background-image", function () {
      var bg = "url(" + $(this).data("img") + ")";
      return bg;
    });
    galleryMasonary();
  });
  // Gallery Masonary
  function galleryMasonary() {
    // filter functions
    var $grid = $(".class-wrapper");
    var filterFns = {};
    $grid.isotope({
      itemSelector: ".class-inner",
      masonry: {
        columnWidth: 0,
      },
    });
    // bind filter button click
    $("ul.filter").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({
        filter: filterValue,
      });
    });
    // change is-checked class on buttons
    $("ul.filter").each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on("click", "li", function () {
        $buttonGroup.find(".active").removeClass("active");
        $(this).addClass("active");
      });
    });
  }
  $(document).ready(function () {
    $(".countdown").countdown(
      {
        date: "11/09/2025 05:00:00",
        offset: +2,
        day: "Day",
        days: "Days",
      },
      function () {}
    );
    $(".sponsor-slider").owlCarousel({
      loop: false,
      responsiveClass: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      margin: 30,
      items: 1,
      responsive: {
        400: {
          items: 2,
        },
        500: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
    $(".road__map-slider").owlCarousel({
      loop: false,
      responsiveClass: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      margin: 0,
      items: 1,
      responsive: {
        426: {
          items: 2,
        },
        992: {
          items: 5,
        },
        1200: {
          items: 5,
        },
      },
    });
    $(".post__related-slider").owlCarousel({
      loop: false,
      responsiveClass: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      margin: 20,
      items: 1,
      responsive: {
        768: {
          items: 2,
        },
      },
    });
    $(".rank-slider").owlCarousel({
      loop: false,
      responsiveClass: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      margin: 20,
      items: 2,
      responsive: {
        576: {
          items: 3,
        },
        768: {
          items: 4,
          margin: 30,
        },
        992: {
          items: 5,
        },
        1200: {
          items: 6,
        },
      },
    });
    $(".select-bar").niceSelect();
    // PoPuP
    $(".video-pop").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: true,
      fixedContentPos: true,
      disableOn: 300,
    });
    $("body").each(function () {
      $(this)
        .find(".img-pop")
        .magnificPopup({
          type: "image",
          gallery: {
            enabled: true,
          },
        });
    });
    // aos js active
    new WOW().init();
    //Faq
    $(".faq-wrapper .faq-title").on("click", function (e) {
      var element = $(this).parent(".faq-item");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find(".faq-content").removeClass("open");
        element.find(".faq-content").slideUp(300, "swing");
      } else {
        element.addClass("open");
        element.children(".faq-content").slideDown(300, "swing");
        element
          .siblings(".faq-item")
          .children(".faq-content")
          .slideUp(300, "swing");
        element.siblings(".faq-item").removeClass("open");
        element.siblings(".faq-item").find(".faq-title").removeClass("open");
        element
          .siblings(".faq-item")
          .find(".faq-content")
          .slideUp(300, "swing");
      }
    });
    //Menu Dropdown Icon Adding
    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $("ul")
      .parent("li")
      .hover(function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
          var newpos = -$(menu).width();
          menu.css({
            left: newpos,
          });
        }
      });
    $(".menu li a").on("click", function (e) {
      var element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(300, "swing");
      } else {
        element.addClass("open");
        element.children("ul").slideDown(300, "swing");
        element.siblings("li").children("ul").slideUp(300, "swing");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.siblings("li").find("ul").slideUp(300, "swing");
      }
    });
    // Scroll To Top
    var scrollTop = $(".toTopBtn");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
    });
    //Click event to scroll to top
    $(".toTopBtn").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });
    //Header Bar
    $(".header-bar").on("click", function () {
      $(this).toggleClass("active");
      $(".overlay").toggleClass("active");
      $(".menu").toggleClass("active");
    });
    //Header Bar
    $(".overlay").on("click", function () {
      $(this).removeClass("active");
      $(".header-bar").removeClass("active");
      $(".menu").removeClass("active");
    });
    //Header
    var fixed_top = $("header");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 1) {
        fixed_top.addClass("active");
      } else {
        fixed_top.removeClass("active");
      }
    });
    $(".counter-item").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });
  });
})(jQuery);
