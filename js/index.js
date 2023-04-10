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
    });
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
