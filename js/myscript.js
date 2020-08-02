$(".services-tabs__item").not(":first").hide();
$(".services-tabs .services-tabs__link").click(function () {
  $(".services-tabs .services-tabs__link").removeClass("active").eq($(this).index()).addClass("active");
  $(".services-tabs__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".details-tabs__item").not(":first").hide();
$(".details-tabs .details-tabs__link").click(function () {
  $(".details-tabs .details-tabs__link").removeClass("active").eq($(this).index()).addClass("active");
  $(".details-tabs__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".portfolio-tabs__item").not(":first").hide();
$(".portfolio-tabs .portfolio-tabs__link").click(function () {
  $(".portfolio-tabs .portfolio-tabs__link").removeClass("active").eq($(this).index()).addClass("active");
  $(".portfolio-tabs__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

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

// var number = document.querySelector('.grafic__number'),
//   numberTop = number.getBoundingClientRect().top,
//   start = +number.innerHTML, end = +number.dataset.max;

// window.addEventListener('scroll', function onScroll() {
//   if (window.pageYOffset > numberTop - window.innerHeight / 2) {
//     this.removeEventListener('scroll', onScroll);
//     var interval = setInterval(function () {
//       number.innerHTML = ++start;
//       if (start == end) {
//         clearInterval(interval);
//       }
//     }, 5);
//   }
// });

$(function () {
  var num = $(".grafic__number");
  num.each(function (indx, el) {
    var max = $(el).data("max");
    var duration = 2000;
    var visibility = checkViewport(el);
    $(el).on("animeNum", function () {
      $({ n: 0 }).animate({ n: max }, {
        easing: "linear",
        duration: duration,
        step: function (now, fx) {
          $(el).html(now | 0)
        }
      })
    }).data("visibility", visibility);
    visibility && $(el).trigger("animeNum")
  });

  function checkViewport(el) {
    var H = document.documentElement.clientHeight,
      h = el.scrollHeight,
      pos = el.getBoundingClientRect();
    return pos.top + h > 0 && pos.bottom - h < H
  }
  $(window).scroll(function () {
    num.each(function (indx, el) {
      var visibility = checkViewport(el);
      el = $(el);
      var old = el.data("visibility");
      old != visibility && el.data("visibility", visibility) && !old && el.trigger("animeNum")
    })
  })
});

$(document).ready(function () {
  $('.team-slider').slick({
    arrows: false,
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    // fade: true,
    // cssEase: 'linear'
  });

  $('.testimonials-slider').slick({
    arrows: false,
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    // fade: true,
    // cssEase: 'linear'
  });
});


const itemParent = document.querySelector('.price__colomns'),
  itemTop = itemParent.querySelectorAll('.price__item-top'),
  itemBottom = itemParent.querySelectorAll('.price__item-bottom'),
  item = document.querySelectorAll('.price__item'),
  buttonPrice = document.querySelectorAll('.price__button');

function mouseover(numberElementMouseover) {
  itemTop.forEach((item, i) => {
    if (numberElementMouseover === i) {
      item.classList.add('hidden');
      item.classList.remove('show', 'fade');
    }
  });

  itemBottom.forEach((item, i) => {
    if (numberElementMouseover === i) {
      item.classList.add('show', 'fade');
      item.classList.remove('hidden');
    }

  });
}

function mouseout(numberElementmouseout) {
  itemTop.forEach((item, i) => {
    if (numberElementmouseout === i) {
      item.classList.add('show', 'fade');
      item.classList.remove('hidden');
    }
  });

  itemBottom.forEach((item, i) => {
    if (numberElementmouseout === i) {
      item.classList.add('hidden');
      item.classList.remove('show', 'fade');
    }
  });
}


item.forEach((item, i) => {
  item.addEventListener('mouseover', function () {
    mouseover(i);
  });
});

item.forEach((item, i) => {
  item.addEventListener('mouseout', function () {
    mouseout(i);
  });
});

buttonPrice.forEach((btn, i) => {
  btn.addEventListener('click', function () {
    alert(`Был клик на ${i + 1} кнопку`);
  });
});