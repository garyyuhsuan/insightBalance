
//noUiSlider  滑軌
var rangeFoo = document.getElementById('range');

    noUiSlider.create(range, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        },
      step:20,
    });


//select toggle effects - account


$("#selectAcc").click(function(){
    $("#account_details").toggle();
    $('.checkItem').prop('checked', false); // Unchecks it
 });

//select toggle effects - credit card

$("#selectCredit").click(function(){
    $("#account_credit_card_details").toggle();
    $('#selectCredit').prop('checked', false); // Unchecks it
 });

//shortcut item - toggle selection
$(".button__amount").click(function(){
      $(this).toggleClass("active");
      $(this).siblings().removeClass("active");

  });
