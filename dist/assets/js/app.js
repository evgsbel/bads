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
  $('.js-product-list-swiper').each(function (index, value) {
    var swiperProducts = new Swiper(value, {
      loop: true,
      freeMode: true,
      navigation: {
        nextEl: value.nextElementSibling.nextElementSibling,
        prevEl: value.nextElementSibling
      },
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

// catalog menu
$(function () {
  var btnClose = $('.js-catalog-menu-closing');
  var btnMenu = $('.js-open-header-catalog');
  var btnMenuMobile = $('.js-open-header-catalog-mobile');
  var menu = $('.js-catalog-menu');
  var subItem = $('.js-catalog-sub-item');
  var lnkMenu = $('.js-open-catalog');
  var lnkMenuMobile = $('.js-open-catalog-mobile');
  var lnkMenuMobileFooter = $('.js-open-catalog-mobile-footer');
  var body = $('body');
  var subCaption = $('.js-sub-caption');
  var btnCloseSubcategory = $('.js-close-subcategory-mobile');
  var fixedHeader = $('.js-desktop-fixed');
  var toggleMenu = function toggleMenu() {
    menu.toggleClass('is-open');
    body.toggleClass('opened-menu');
  };
  function initMenu() {
    // desktop
    btnMenu.click(function (e) {
      e.stopPropagation();
      subItem.eq(0).addClass('is-active');
      subItem.eq(1).removeClass('is-active');
      if (btnMenu.hasClass('is-active')) {
        subItem.removeClass('is-active');
      }
      $(this).toggleClass('is-active');
      toggleMenu();
    });
    lnkMenu.click(function (e) {
      e.stopPropagation();
      subItem.eq(1).addClass('is-active');
      subItem.eq(0).removeClass('is-active');
      if (btnMenu.hasClass('is-active')) {
        subItem.removeClass('is-active');
      }
      btnMenu.removeClass('is-active');
      toggleMenu();
    });
    subItem.hover(function () {
      subItem.removeClass('is-active');
      $(this).addClass('is-active');
    });

    //mobile
    btnClose.click(function (e) {
      //e.stopPropagation();
      subItem.removeClass('is-active');
      btnMenuMobile.removeClass('is-active');
      toggleMenu();
    });
    btnMenuMobile.click(function (e) {
      e.stopPropagation();
      btnMenuMobile.toggleClass('is-active');
      toggleMenu();
    });
    lnkMenuMobile.click(function (e) {
      e.preventDefault();
      toggleMenu();
      btnCloseSubcategory.removeClass('is-hide');
      btnCloseSubcategory.addClass('is-back');
      subItem.addClass('from-link');
      fixedHeader.addClass('position-static');
    });
    lnkMenuMobileFooter.click(function (e) {
      e.preventDefault();
      toggleMenu();
      btnCloseSubcategory.removeClass('is-hide');
      btnCloseSubcategory.addClass('is-back');
      subItem.addClass('from-link');
    });
    subItem.click(function (e) {
      e.preventDefault();
      $(this).addClass('is-active');
      btnCloseSubcategory.removeClass('is-hide is-back');
      if ($(this).hasClass('from-link')) {
        btnCloseSubcategory.addClass('back-main');
      }
      var subCaptionAttr = $(this).data('caption');
      subCaption.html(subCaptionAttr);
    });
    btnCloseSubcategory.click(function (e) {
      $(this).addClass('is-hide');
      subItem.removeClass('is-active');
      if ($(this).hasClass('is-back')) {
        toggleMenu();
        fixedHeader.removeClass('position-static');
      }
      if ($(this).hasClass('back-main')) {
        btnCloseSubcategory.addClass('is-back');
        subItem.removeClass('is-active');
      }
      subCaption.html('Каталог');
    });
  }
  initMenu();
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
// add to cart text
$('.js-add-to-cart').click(function () {
  $(this).text('В корзине');
});

// mobile menu
$(function () {
  var btnMenu = document.querySelectorAll('.js-open-mobile-menu');
  var menu = document.querySelector('.js-mobile-menu');
  var body = document.querySelector('body');
  btnMenu.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.add('is-open');
      body.classList.add('opened-menu');
    });
  });
  var closeBtn = document.querySelector('.js-close-mobile-menu');
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu');
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
    placeholder: 'Сортировать по',
    width: 'resolve'
  }).on('select2:select', function () {
    $(this).parent().find('.js-clear-select').addClass('is-active');
  });
  $('.js-select-brand').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Бренды'
  }).on('select2:select', function () {
    $(this).parent().find('.js-clear-select').addClass('is-active');
  });
  $('.js-select-indication').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Показания'
  }).on('select2:select', function () {
    $(this).parent().find('.js-clear-select').addClass('is-active');
  });
  $('.js-select-forms').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Форма выпуска'
  }).on('select2:select', function () {
    $(this).parent().find('.js-clear-select').addClass('is-active');
  });
  $('.js-clear-select').click(function () {
    $(this).removeClass('is-active');
    $(this).parent().find('select').val(null).trigger('change');
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
$(function () {
  if ($('#map').length > 0) {
    var init = function init() {
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
    };
    ymaps.ready(init);
  }
});

// cart steps
$(function () {
  $(function () {
    $("#smartwizard").on("showStep", function (e, anchorObject, stepIndex) {
      if (stepIndex === 1) {
        console.log(stepIndex);
        $('.js-wizard-caption').text('Способ получения');
      } else if (stepIndex === 2) {
        console.log(stepIndex);
        $('.js-wizard-caption').text('Оплата и подтверждение');
      } else {
        $('.js-wizard-caption').text('Корзина');
      }
    });
    // SmartWizard initialize
    $('#smartwizard').smartWizard({
      enableUrlHash: false,
      transition: {
        animation: 'fade'
      },
      toolbar: {
        position: 'top',
        showNextButton: false,
        showPreviousButton: false
      },
      lang: {
        // Language variables for button
        next: 'Next',
        previous: 'Вернуться назад'
      }
    });
  });
});

// hide mobile blocks

$('.js-open-mobile-sorting').click(function () {
  $('.js-hide-sort').addClass('is-open');
});
$('.js-open-mobile-filters').click(function () {
  $('.js-hide-filters').addClass('is-open');
});
$('.js-filters-closing').click(function () {
  $('.hide-filters').removeClass('is-open');
});
$('.js-clear-filters').click(function () {
  console.log('click');
  $('#sales').prop('checked', false);
  $('#filter-price-min').val('');
  $('#filter-price-max').val('');
});

// fixed header
$(function () {
  window.addEventListener('scroll', function () {
    function stickySidebar() {
      var scrollDistance = $(document).scrollTop(),
        headerHeight = $('.header__top').outerHeight(true),
        $header = $('.js-desktop-fixed'),
        $headerMobile = $('.header-fixed-mobile');
      if (scrollDistance >= headerHeight) {
        $header.addClass('is-fixed');
        $headerMobile.addClass('is-fixed');
      } else {
        $header.removeClass('is-fixed');
        $headerMobile.removeClass('is-fixed');
      }
    }
    stickySidebar();
    $(document).scroll(function () {
      stickySidebar();
    });
  });
});
$(function () {
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
});