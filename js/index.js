function topFunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}

$(document).ready(function () {
  $(window).scroll(function () {
    $(".reveal").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it in */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 1500);
        /* 1500 is the duration of fade effect */
      }
    });
  });
});

$(document).ready(function () {
  $("#tab1").click(function () {
    $("#categories").show();
    $("#details").hide();
    $("#tab1").removeClass("inactive");
    $("#tab2").addClass("inactive");
  }),
    $("#tab2").click(function () {
      $("#categories").hide();
      $("#details").show();
      $("#tab2").removeClass("inactive");
      $("#tab1").addClass("inactive");
    }),
    $(".customDuration").click(function () {
      $(".customDurationInput").show();
    }),
    $(".custom60").click(function () {
      $(".customDurationInput").hide();
    }),
    $(".custom90").click(function () {
      $(".customDurationInput").hide();
    }),
    $(".customAll").click(function () {
      $(".customDurationInput").hide();
    }),
    $("#msg_board").delay(4e3).hide(0);
}),
  $(function () {
    $(".pull_keep").pullkeep(function (t) {
      console.log("click keep");
    });
  });

$("#info").on("click", function (e) {
  if ($("#info_msg").css("display") == "none") $("#info_msg").show();
  else $("#info_msg").hide();
});
$(document).on("click", function (e) {
  $clicked = $(e.target);
  if (!$clicked.is("#info") && $("#info").has(e.target).length == 0) {
    $("#info_msg").hide();
  }
});

//提示 - go to top 按鈕設定

var navbar = document.getElementById("myHeader"),
  sticky = navbar.offsetTop,
  mybutton = document.getElementById("gotop"),
  _mybutton = document.getElementById("gotop2"),
  sortNum = document.getElementById("sorting"),
  summary = document.getElementById("totalSummary"),
  _summary = document.getElementById("totalSummary2");

function scrollFunction() {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? ((mybutton.style.display = "block"), (_mybutton.style.display = "block"))
    : ((mybutton.style.display = "none"), (_mybutton.style.display = "none")),
    window.pageYOffset >= 350
      ? (navbar.classList.add("sticky"),
        summary.classList.add("show"),
        _summary.classList.add("show"))
      : (navbar.classList.remove("sticky"),
        summary.classList.remove("show"),
        _summary.classList.remove("show"));

  window.pageYOffset >= 400
    ? (sortNum.classList.add("sticky"), (sortNum.style.marginTop = "52px"))
    : (sortNum.classList.remove("sticky"), (sortNum.style.marginTop = "0px"));
}
function topFunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
window.onscroll = function () {
  scrollFunction();
};

// Customized Time slot - toggle selection
$(".c-radio").click(function () {
  $(this).toggleClass("active");
  $(this).siblings().removeClass("active");
});

/*jquery and jqueryUI (for EASING Bounce effect) required*/
$(document).ready(function () {
  //DOM ready

  /* if div with class="li.li" is visible in actual viewport, 
    fade it in with bounce effect */
  $("li.list").each(function (i) {
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
    $("li.list").each(function (i) {
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
      var obj = $(this).position().top + $(this).outerHeight();
      var scrollBottom = scrollTop + height + $(this).height();
      if (scrollBottom > obj) {
        $(this)
          // .delay(600)
          // .animate({ opacity: "1" }, { queue: false, duration: 400 })
          // .animate(
          //   { marginTop: "0px" },
          //   { queue: false, duration: 400, easing: "swing" }
          // );
          .animate({ opacity: "1" }, { queue: false, duration: 600 })
          .animate({ marginTop: "0px" }, 600, "swing");
      }
    });
  });
  $("#tab2").click(function () {
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
            // .animate({ opacity: "1" }, { queue: false, duration: 800 })
            // .animate(
            //   { marginTop: "0px" },
            //   { queue: false, duration: 800, easing: "swing" }
            // );
            .animate({ opacity: "1" }, { queue: false, duration: 600 })
            .animate({ marginTop: "0px" }, 600, "swing");
        }
      });
    });
  });
  $("#tab1").click(function () {
    // alert("click tab1")
    $("li.list").each(function (i) {
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
      $("li.list").each(function (i) {
        var scrollTop = $(window).scrollTop();
        var height = $(window).height();
        var obj = $(this).position().top + $(this).outerHeight();
        var scrollBottom = scrollTop + height + $(this).height();

        if (scrollBottom > obj) {
          $(this)
            // .delay(600)
            // .animate({ opacity: "1" }, { queue: false, duration: 800 })
            // .animate(
            //   { marginTop: "0px" },
            //   { queue: false, duration: 800, easing: "swing" }
            // );
            .animate({ opacity: "1" }, { queue: false, duration: 600 })
            .animate({ marginTop: "0px" }, 600, "swing");
        }
      });
    });
  });
});

// 切換分類明細，並使用動畫
$("#tab1").click(function () {
  $("#categories").show();
  $("#details").hide();
  $("#tab1").removeClass("inactive");
  $("#tab2").addClass("inactive");
});

$("#tab2").click(function () {
  $("#categories").show();
  $("#details").hide();
  $("#tab2").removeClass("inactive");
  $("#tab1").addClass("inactive");
});
