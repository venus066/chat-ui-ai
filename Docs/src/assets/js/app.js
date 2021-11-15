/*
    Template Name: Doot - Responsive Bootstrap 5 Chat App
    Author: Themesbrand
    Version: 1.0.0
    Website: https://themesbrand.com/
    Contact: themesbrand@gmail.com
    File: Main Js File
*/

(function ($) {
  "use strict";

  function initLeftMenuCollapse() {
    $("#vertical-menu-btn").on("click", function (event) {
      event.preventDefault();
      $("body").toggleClass("sidebar-enable");
      if ($(window).width() >= 992) {
        $("body").toggleClass("vertical-collpsed");
      } else {
        $("body").removeClass("vertical-collpsed");
      }
    });
  }

  function initActiveMenu() {
    // === following js will activate the menu in left side bar based on url ====
    $("#sidebar-menu a").each(function () {
      var pageUrl = window.location.href.split(/[?#]/)[0];
      if (this.href == pageUrl) {
        $(this).addClass("active");
        $(this).parent().addClass("mm-active"); // add active to li of the current link
        $(this).parent().parent().addClass("mm-show");
        $(this).parent().parent().prev().addClass("mm-active"); // add active class to an anchor
        $(this).parent().parent().parent().addClass("mm-active");
        $(this).parent().parent().parent().parent().addClass("mm-show"); // add active to li of the current link
        $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("mm-active");
      }
    });
  }

  function initSmoothlink() {
    $(".right-side-nav a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 94,
          },
          1500,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  }

  function init() {
    initLeftMenuCollapse();
    initActiveMenu();
    initSmoothlink();
  }

  init();
})(jQuery);
