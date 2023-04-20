/*jquery and jqueryUI (for EASING Bounce effect) required*/
$(document).ready(function () {
  //DOM ready

  // alert("click tab2")
  $("li.pull_keep").each(function (i) {
    /*change position of each card*/
    $(this).css({ opacity: "0", "margin-top": "10px" });
    //current viewport's top position
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    var obj = $(this).position().top + $(this).outerHeight();
    //current viewport's bottom position
    var scrollBottom = scrollTop + height + $(this).height();

    if (scrollBottom > obj) {
      $(this)
        .animate({ opacity: "1" }, { queue: false, duration: 600 })
        .animate({ marginTop: "0px" }, 600, "swing");
    }
  });

  /* scrolling to bottom: if visible in viewport, fade div in with delay */
  $(window).scroll(function () {
    $("li.pull_keep").each(function (i) {
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
      var obj = $(this).position().top + $(this).outerHeight();
      var scrollBottom = scrollTop + height + $(this).height();

      if (scrollBottom > obj) {
        $(this)
          // .delay(600)
          // .animate({ opacity: "1" }, { queue: false, duration: 1100 })
          // .animate(
          //   { marginTop: "0px" },
          //   { queue: false, duration: 1600, easing: "easeOutElastic" }
          // );
          .animate({ opacity: "1" }, { queue: false, duration: 600 })
          .animate({ marginTop: "0px" }, 600, "swing");
      }
    });
  });
});
