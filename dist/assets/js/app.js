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
$(function () {
  $('[data-fancybox]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionEffect: "rotate",
    transitionDuration: 400
  });
});

//input number
$(function () {
  $('.input-count .input-count_minus').click(function () {
    var $input = $(this).parent().find('.js-input-number');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
  });
  $('.input-count .input-count_plus').click(function () {
    var $input = $(this).parent().find('.js-input-number');
    var count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
  });
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
  });
  var swiperProducts = new Swiper(".js-product-list-swiper", {
    loop: true,
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 30,
        grabCursor: true
      },
      576: {
        slidesPerView: 2.5,
        spaceBetween: 30,
        grabCursor: true
      },
      900: {
        slidesPerView: 3.5,
        spaceBetween: 30,
        grabCursor: true
      },
      1200: {
        spaceBetween: 35,
        slidesPerView: 5,
        grabCursor: true
      }
    }
  });
});
_toConsumableArray(document.querySelectorAll('.tabs__content')).map(function (tab) {
  var swiper = tab.querySelector('.swiper');
  var useful_swiper = tab.querySelector('.js-useful-slider');
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  if (swiper && useful_swiper) {
    var usSwiper = new Swiper(useful_swiper, {
      setWrapperSize: true,
      direction: 'horizontal',
      navigation: {
        nextEl: ".useful-button-next",
        prevEl: ".useful-button-prev"
      },
      observer: true,
      observeParents: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        900: {
          slidesPerView: 3
        },
        1200: {
          spaceBetween: 40,
          slidesPerView: 3
        }
      }
    });
  }
});

// tabs
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

//add to favorite
$(function () {
  $('.js-add-to-favorite').click(function () {
    $(this).toggleClass('is-active');
  });
});
$(function () {
  $('.js-card-toggle-favorites').on('click', function () {
    if (!$(this).hasClass('is-active')) {
      $(this).addClass('is-active').find('span').text('В избранном');
    } else $(this).removeClass('is-active').find('span').text('В избранное');
  });
});

// catalog menu
$(function () {
  var btnMenu = document.querySelector('.js-open-header-catalog');
  var lnkMenu = document.querySelector('.js-open-catalog');
  var menu = document.querySelector('.js-catalog-menu');
  var subItem = document.querySelectorAll('.js-catalog-sub-item');
  var toggleMenu = function toggleMenu() {
    menu.classList.toggle('is-open');
    btnMenu.classList.toggle('is-active');
  };
  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
    subItem[0].classList.add('is-active');
    subItem[1].classList.remove('is-active');
  });
  lnkMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
    subItem[1].classList.add('is-active');
    subItem[0].classList.remove('is-active');
  });
  subItem.forEach(function (el) {
    el.addEventListener('mouseover', function () {
      el.classList.remove('is-active');
    });
  });
  subItem.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      el.classList.remove('is-active');
    });
  });
});

// mobile menu
$(function () {
  var btnMenu = document.querySelector('.js-open-mobile-menu');
  var menu = document.querySelector('.js-mobile-menu');
  var toggleMenu = function toggleMenu() {
    menu.classList.add('is-open');
    btnMenu.classList.add('is-active');
  };
  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });
  var closeBtn = document.querySelector('.js-close-mobile-menu');
  var closeMenu = function closeMenu() {
    menu.classList.remove('is-open');
    btnMenu.classList.remove('is-active');
  };
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeMenu();
  });
});

// change city in header
$(function () {
  new SimpleBar(document.getElementById('citiesList'), {
    autoHide: false
  });
  $(".js-open-cities").click(function (event) {
    toggleMenu(this);
    event.stopPropagation();
  });
  $('.cities__item').click(function () {
    $('.js-open-cities').html($(this).text());
    toggleMenu();
  });
  function toggleMenu() {
    var menu = $(".js-cities-container");
    if (!menu.hasClass('active')) {
      window.addEventListener('click', closeMenu);
    } else {
      window.removeEventListener('click', closeMenu);
    }
    menu.toggleClass("active");
    $(".js-open-cities").toggleClass('is-active');
  }
  function closeMenu() {
    $(".js-cities-container").removeClass("active");
    $(".js-open-cities").removeClass('is-active');
  }
  $('.js-cities-container').click(function (event) {
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

// change city in header
$(function () {
  if ($('#citiesListCabinet').length > 0) {
    new SimpleBar(document.getElementById('citiesListCabinet'), {
      autoHide: false
    });
  }
  $(".js-open-cities-user").click(function (event) {
    toggleMenu(this);
    event.stopPropagation();
  });
  $('.cities__item').click(function () {
    $('.js-open-cities-user').html($(this).text());
    toggleMenu();
  });
  function toggleMenu() {
    var menu = $(".js-cities-container-user");
    if (!menu.hasClass('active')) {
      window.addEventListener('click', closeMenu);
    } else {
      window.removeEventListener('click', closeMenu);
    }
    menu.toggleClass("active");
    $(".js-open-cities-user").toggleClass('is-active');
  }
  function closeMenu() {
    $(".js-cities-container-user").removeClass("active");
    $(".js-open-cities-user").removeClass('is-active');
  }
  $('.js-cities-container').click(function (event) {
    event.stopPropagation();
  });
});

// change text in small device
$(function () {
  var inpSearch = document.querySelector('.header-search__input');
  window.addEventListener('resize', changePlaceholder);
  changePlaceholder.call(window);
  function changePlaceholder() {
    inpSearch.setAttribute('placeholder', this.innerWidth >= 576 ? 'Введите название препарата' : 'Найти препарат');
  }
});

// custom select
$(document).ready(function () {
  $('.js-select-sort').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Сортировать по'
  });
  $('.js-select-brand').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Бренды'
  });
  $('.js-select-indication').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Показания'
  });
  $('.js-select-forms').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Форма выпуска'
  });
});

//custom scroll in locations cart
$(function () {
  if ($('#locationsList').length > 0) {
    new SimpleBar(document.getElementById('locationsList'), {
      autoHide: false
    });
  }
});

// dropdown location in cart
$(function () {
  $('.js-open-location-info').on('click', function () {
    $(this).parents('.locations__item').toggleClass('is-active').find('.locations__info').slideToggle();
    $(this).text($(this).text() == 'Как найти' ? 'Свернуть' : 'Как найти');
  });
});

// search location in cart
$(function () {
  $('.js-location-input').on('input', function () {
    var search = $(this).val();
    searchData(search);
  });
  function searchData(search) {
    var towns = $('.locations__item');
    towns.each(function () {
      if ($(this).text().indexOf(search) === -1) {
        $(this).addClass('item_hide');
      } else {
        $(this).removeClass('item_hide');
      }
    });
  }
});

// change location in cart
$(function () {
  var changeBtn = $('.js-change-location');
  changeBtn.on('click', function () {
    changeBtn.removeClass('is-active').text('Выбрать');
    if (!$(this).hasClass('is-active')) {
      $(this).addClass('is-active').text('Выбрано');
    } else {
      $(this).removeClass('is-active').text('Выбрать');
    }
    if (changeBtn.hasClass('is-active')) {
      $('.cart-obtain__btn').removeAttr('disabled');
    } else {
      $('.cart-obtain__btn').attr('disabled', 'true');
    }
  });
});

// show pass in input
$(function () {
  var passField = document.querySelector(".js-show-pass-input");
  var showBtn = document.querySelector(".js-show-pass");
  if ($('.js-show-pass').length > 0) {
    showBtn.onclick = function () {
      if (passField.type === "password") {
        passField.type = "text";
        showBtn.classList.add("is-active");
      } else {
        passField.type = "password";
        showBtn.classList.remove("is-active");
      }
    };
  }
});

// dropdown order item in cabinet
$(function () {
  $('.order-list__arrow').on('click', function () {
    $(this).toggleClass('is-active');
    $(this).parents('.order-list__body').find('.order-list-products').slideToggle();
  });
});

// map
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    zoom: 15,
    center: [53.206434, 50.121681],
    controls: []
  });
  var destinations = {
    'Московское ш.5': [53.291865, 50.274951],
    'Клиническая 32': [53.198128, 50.140177],
    'Ленинская 301': [53.202669, 50.125400],
    'Полевая 9': [53.206434, 50.121681],
    'просп. Масленникова, 47': [53.205663, 50.162312],
    'Мичурина 137А': [53.212345, 50.159365],
    'Красноармейская 121': [53.188179, 50.121600]
  };
  var changeBtn = $('.js-change-location');
  changeBtn.on('click', function (e) {
    e.preventDefault();
    var pos = $(this).data('map');

    // переходим по координатам
    myMap.panTo(destinations[pos], {
      flying: true,
      delay: 1500
    }).then(function () {
      myMap.options.set('maxAnimationZoomDifference', Infinity);
      myMap.setZoom(17, {
        duration: 1500
      });
    });
  });
  for (var _i = 0, _Object$keys = Object.keys(destinations); _i < _Object$keys.length; _i++) {
    var pls = _Object$keys[_i];
    var myPlacemark = new ymaps.Placemark(destinations[pls], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'assets/img/map-icon.png',
      iconImageSize: [40, 40],
      iconContent: pls
    });
    myMap.geoObjects.add(myPlacemark);
    myPlacemark.events.add('click', function (e) {
      var activeGeoObject = e.get('target');
      var iconContent = activeGeoObject.options.get('iconContent');
      changeBtn.removeClass('is-active').text('Выбрать');
      $('.cart-obtain__btn').attr('disabled', 'true');
      changeBtn.each(function () {
        var btnAttr = $(this).data('map');
        if (iconContent === btnAttr) {
          $(this).toggleClass('is-active').text('Выбрано');
          $('.locations__item').addClass('item_hide');
          $(this).parents('.locations__item').removeClass('item_hide');
          $('.cart-obtain__btn').removeAttr('disabled');
        }
      });
    });
  }
}