$(window).scroll(function () {
  $(this).scrollTop() > 100
    ? $("#header").addClass("header-scrolled")
    : $("#header").removeClass("header-scrolled");
}),
  $(window).scrollTop() > 100 && $("#header").addClass("header-scrolled"),
  $(".clients-carousel").owlCarousel({
    autoplay: !0,
    margin: 40,
    dots: !1,
    loop: !0,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } },
  }),
  $(".clients-carousel-landing").owlCarousel({
    autoplay: !0,
    margin: 40,
    dots: !1,
    loop: !0,
    responsive: { 0: { items: 4 }, 768: { items: 6 }, 900: { items: 8 } },
  }),
  $(".clients-carousel-index").owlCarousel({
    autoplay: !0,
    margin: 40,
    dots: !1,
    loop: !0,
    responsive: { 0: { items: 4 }, 768: { items: 6 }, 900: { items: 8 } },
  }),
  $(".home-carousel").owlCarousel({
    items: 1,
    dots: !0,
    loop: !0,
    nav: !1,
    margin: 10,
    autoplay: !0,
    autoplayTimeout: 2500,
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 1 } },
  }),
  (function (e) {
    "use strict";
    var o = {
      slicknav: function () {
        e("#main-menu").slicknav({
          allowParentLinks: !0,
          prependTo: "#mobile-menu-wrap",
          label: "",
        }),
          e(".mobile-menu-trigger").on("click", function (o) {
            e(".mobile-menu-container").addClass("menu-open"),
              o.stopPropagation();
          }),
          e(".mobile-menu-close").on("click", function (o) {
            e(".mobile-menu-container").removeClass("menu-open"),
              o.stopPropagation();
          });
      },
    };
    e(document).ready(function () {
      o.slicknav();
    });
  })(jQuery);
