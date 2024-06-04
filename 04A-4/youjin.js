$(document).ready(function () {
  $(".nav > ul>li").on("mouseover", function () {
    $(".nav > ul > li > ul > li").css({ display: "block" });
  });
  $(".nav > ul>li").on("mouseleave", function () {
    $(".nav > ul > li > ul > li").css({ display: "none" });
  });
  setInterval(function () {
    $(".slide").fadeOut(1000, function () {
      $(".img").first().appendTo(".slide"); //순서뒤로
      $(".slide").fadeIn(1000); //초기값으로 설정
    });
  }, 3000);
  $("td:first").on("click", function () {
    $("#pop").fadeIn();
  });
  $(".out").on("click", function () {
    $("#pop").fadeOut();
  });
});
