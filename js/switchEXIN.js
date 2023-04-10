$(document).ready(function () {
    //點選支出
    $(".pill-expenses").click(function(){
        //背景
        $(".wrapper").removeClass("income");
        $(".wrapper").addClass("expense");

        //切換鍵
        $(".pill-income").removeClass("active");
        $(".pill-expenses").addClass("active");

        //時間區間切換鍵
        $("#timeSwitch").removeClass("duration-income");
        $("#timeSwitch").addClass("duration-expense");

        //分類明細切換鍵
        $("#tab1").removeClass("color-in"); 
        $("#tab2").removeClass("color-in");
        $("#tab1").addClass("color-ex");
        $("#tab2").addClass("color-ex");

        // 分類明細金額標示
        $("#topLabel").removeClass("color-in");
        $("#topLabel").addClass("color-ex");
        $(".amount-style").removeClass("color-in");
        $(".amount-style").addClass("color-ex");

        // float-btn
        $(".float-btn").removeClass("style-in");
        $(".float-btn").addClass("style-ex");
        $(".float-btn-amount").removeClass("color-in");
        $(".float-btn-amount").addClass("color-ex");

        // 自訂時間
        $("#dateFilter__content_ex").css("display","block");
        $("#dateFilter__content_in").css("display","none");

        // btnSet
        $("#btn-wrap").removeClass("btnSet__in");
        $("#btn-wrap").addClass("btnSet__ex");

        // mini loader
        $(".sk-circle").removeClass("color-in");
        $(".sk-circle").addClass("color-ex");

        // popup img
        $("#img_alert").attr("src","./images/global/triangle_alert_red.svg");
        
        // popup btnSet
        $("#btnSet-popup").removeClass("btnSet__in");
        $("#btnSet-popup").addClass("btnSet__ex");

      });
    //點選收入
    $(".pill-income").click(function(){
        //背景
        $(".wrapper").removeClass("expense");
        $(".wrapper").addClass("income");

        //切換鍵
        $(".pill-expenses").removeClass("active");
        $(".pill-income").addClass("active");

        //時間區間切換鍵
        $("#timeSwitch").removeClass("duration-expense");
        $("#timeSwitch").addClass("duration-income");

        //分類明細切換鍵
        $("#tab1").removeClass("color-ex"); 
        $("#tab2").removeClass("color-ex");
        $("#tab1").addClass("color-in");
        $("#tab2").addClass("color-in");

        // 分類明細金額標示
        $("#topLabel").removeClass("color-ex");
        $("#topLabel").addClass("color-in");
        $(".amount-style").removeClass("color-ex");
        $(".amount-style").addClass("color-in");

        // float-btn
        $(".float-btn").removeClass("style-ex");
        $(".float-btn").addClass("style-in");
        $(".float-btn-amount").removeClass("color-ex");
        $(".float-btn-amount").addClass("color-in");
        
        // 自訂時間
        $("#dateFilter__content_ex").css("display","none");
        $("#dateFilter__content_in").css("display","block");

        // btnSet
        $("#btn-wrap").removeClass("btnSet__ex");
        $("#btn-wrap").addClass("btnSet__in");

        // mini loader
        $(".sk-circle").removeClass("color-ex");
        $(".sk-circle").addClass("color-in");

        // popup img
        $("#img_alert").attr("src","./images/global/triangle_alert_blue.svg");

        // popup btnSet
        $("#btnSet-popup").removeClass("btnSet__ex");
        $("#btnSet-popup").addClass("btnSet__in");

      });
    
 });