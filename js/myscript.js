$(".services-tabs__item").not(":first").hide();
$(".services-tabs .services-tabs__link").click(function () {
  $(".services-tabs .services-tabs__link").removeClass("active").eq($(this).index()).addClass("active");
  $(".services-tabs__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".details-tabs__item").not(":first").hide();
$(".details-tabs .details-tabs__link").click(function () {
  $(".details-tabs .details-tabs__link").removeClass("active").eq($(this).index()).addClass("active");
  $(".details-tabs__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active")

var target = $('.grafic__counter');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function () {
  var winScrollTop = $(this).scrollTop();
  if (winScrollTop > scrollToElem) {
    //сработает когда пользователь доскроллит к элементу с классом .elem
  }
});