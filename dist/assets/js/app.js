"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//masked inputs
$(function () {
  Inputmask({
    "mask": "+7 (999) 999 - 99 - 99"
  }).mask('.phone-mask');
});

//fancybox
$('[data-fancybox=""]').fancybox({
  // Options will go here
});

//inout number
$(function () {
  // Убавляем кол-во по клику
  $('.input-count .input-count_minus').click(function () {
    var $input = $(this).parent().find('.js-input-number');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
  });
  // Прибавляем кол-во по клику
  $('.input-count .input-count_plus').click(function () {
    var $input = $(this).parent().find('.js-input-number');
    var count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
  });
  // Убираем все лишнее и невозможное при изменении поля
  $('.input-count .js-input-number').bind("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
      this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
      this.value = parseInt($(this).data('max-count'));
    }
  });
});

//  sliders
$(function () {
  var swiperHero = new Swiper(".js-hero-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination"
    }
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 20,
    //   },
    //   768: {
    //     slidesPerView: 2,
    //   },
    //   900: {
    //     slidesPerView: 3,
    //   },
    //   1024: {
    //     slidesPerView: 4,
    //     spaceBetween: 30,
    //   },
    // },
  });
});

_toConsumableArray(document.querySelectorAll('.tabs__content')).map(function (tab) {
  var swiper = tab.querySelector('.swiper');
  var useful_swiper = tab.querySelector('.js-useful-slider');
  if (swiper && useful_swiper) {
    var myMiniSwiper = new Swiper(useful_swiper, {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 40,
      direction: 'horizontal',
      navigation: {
        nextEl: ".useful-button-next",
        prevEl: ".useful-button-prev"
      }
    });
  }
});

// // tabs

document.addEventListener('DOMContentLoaded', function () {
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      tabsBtn.forEach(function (tabsBtn) {
        tabsBtn.classList.remove('is-active');
      });
      var path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('is-active');
      el.classList.add('is-active');
    });
  });
});

// catalog menu
$(function () {
  var btnMenu = document.querySelector('.js-open-header-catalog');
  var lnkMenu = document.querySelector('.js-open-catalog');
  var menu = document.querySelector('.js-catalog-menu');
  var toggleMenu = function toggleMenu() {
    menu.classList.toggle('is-open');
    btnMenu.classList.toggle('is-active');
  };
  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });
  lnkMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });
});
$(document).ready(function () {
  new SimpleBar(document.getElementById('citiesList'), {
    autoHide: false
  });
});

// search city
$(function () {
  $(".js-open-cities").click(function (event) {
    toggleMenu();
    event.stopPropagation();
  });
  $('.cities__item').click(function () {
    $('.js-open-cities').html($(this).text());
    toggleMenu();
  });
  function toggleMenu() {
    var menu = $(".cities");
    if (!menu.hasClass('active')) {
      window.addEventListener('click', closeMenu);
    } else {
      window.removeEventListener('click', closeMenu);
    }
    menu.toggleClass("active");
  }
  function closeMenu() {
    $(".cities").removeClass("active");
  }
  $('.cities').click(function (event) {
    event.stopPropagation();
  });
  $('.cities__input').on('input', function () {
    var search = $(this).val();
    searchData(search);
  });
  function searchData(search) {
    var towns = $('.cities__item');
    towns.each(function () {
      if ($(this).text().indexOf(search) === -1) {
        $(this).addClass('item_hide');
      } else {
        $(this).removeClass('item_hide');
      }
    });
  }
});

// (async () => {
//   try {
//     let response = await fetch("assets/js/city.json")
//     let array = await response.json()
//
//     let parent = document.querySelector('.cities__list')
//     array.forEach(item => {
//       let elem = document.createElement("li");
//       elem.classList.add('cities__item')
//       elem.innerHTML = `${item.city}`;
//       parent.appendChild(elem);
//     })
//   } catch (err) {
//     alert("Error: " + err)
//   }
// })()