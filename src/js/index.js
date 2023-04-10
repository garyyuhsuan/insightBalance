
 $(document).ready(function() {

   //-類別明細切換
  $("#tab1").click(function() {
    $("#categories").show();
    $("#details").hide();
    $("#tab1").addClass("active");
    $("#tab2").removeClass("active");
  })

  $("#tab2").click(function() {  
    $("#categories").hide();
    $("#details").show();
    $("#tab1").removeClass("active");
    $("#tab2").addClass("active");
  })
  $("#info").click(function() {
    $("#info_msg").show();
  })
  $("#info_msg").click(function() {
    $("#info_msg").hide();
  })

  //-提示訊息消失_new
  // var toast = document.querySelector("#msg_board");
  // window.onload=function(){
  //   setTimeout(() =>{
  //   toast.classList.add("active");
  // }, 500)
  //   setTimeout(() =>{
  //   toast.classList.remove("active");
  //   toast.classList.add("hidden");    
  //   }, 4500)
  // }
  // toast.addEventListener("click", () =>{
  //   setTimeout(() =>{
  //     toast.classList.add("hidden");
  //   },)
  // })

  //-日期篩選-其他 show hide
  $("#customDuration").click(function() { 
    $("#customDurationInput").show();   
  })
  $("#custom60").click(function() { 
    $("#customDurationInput").hide();   
  })
  $("#custom90").click(function() { 
    $("#customDurationInput").hide();   
  })
  $("#customAll").click(function() { 
    $("#customDurationInput").hide();   
  })

})

// 左右滑動新增刪除
$(function(){
  $('.pull_keep').pullkeep(function($dom){
      // something you want here
      console.log('click keep');
      // $dom.remove();
  });
})

// -sticky header scroll top

var navbar = document.getElementById("myHeader");
var sticky = navbar.offsetTop;
var mybutton = document.getElementById("gotop");
var _mybutton = document.getElementById("gotop2");
var sortNum = document.getElementById("sorting");
var summary = document.getElementById("totalSummary");
var _summary = document.getElementById("totalSummary2");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    _mybutton.style.display = "block";
    summary.style.display = "flex";
    _summary.style.display = "flex";
  } else {
    mybutton.style.display = "none";
    _mybutton.style.display = "none";
    summary.style.display = "none";
    _summary.style.display = "none";
  }

  if (window.pageYOffset >= 350) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

  if (window.pageYOffset >= 400) {
    sortNum.classList.add("sticky");
    sortNum.style.marginTop ="52px"
  } else {
    sortNum.classList.remove("sticky");
    sortNum.style.marginTop ="0px"
  }
 }

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};