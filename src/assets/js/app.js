//masked inputs
$(() => {
  Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');
});

//fancybox
$(() => {
  $('[data-fancybox]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionEffect: "rotate",
    transitionDuration: 400,
  });
})

//input number
$(() => {

  $('.input-count .input-count_minus').click(function () {
    let $input = $(this).parent().find('.js-input-number');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
  });

  $('.input-count .input-count_plus').click(function () {
    let $input = $(this).parent().find('.js-input-number');
    let count = parseInt($input.val()) + 1;
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
$(() => {
  let swiperHero = new Swiper(".js-hero-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  let swiperProducts = new Swiper(".js-product-list-swiper", {
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

[...document.querySelectorAll('.tabs__content')].map(tab => {
  const swiper = tab.querySelector('.swiper');
  const useful_swiper = tab.querySelector('.js-useful-slider');
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  if (swiper && useful_swiper) {
    const usSwiper = new Swiper(useful_swiper, {
      setWrapperSize: true,
      direction: 'horizontal',
      navigation: {
        nextEl: ".useful-button-next",
        prevEl: ".useful-button-prev",
      },
      observer: true,
      observeParents: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 3,
        },
        1200: {
          spaceBetween: 40,
          slidesPerView: 3,
        }
      }
    });
  }
});

// tabs
document.addEventListener('DOMContentLoaded', function () {
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {

      tabsBtn.forEach(tabsBtn => {
        tabsBtn.classList.remove('is-active');
      });

      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');

      });
      document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
      el.classList.add('is-active');
    });
  });
});


//add to favorite
$(() => {
  $('.js-add-to-favorite').click(function () {
    $(this).toggleClass('is-active')
  })
});
$(() => {
  $('.js-card-toggle-favorites').on('click', function () {
    if (!($(this).hasClass('is-active'))) {
      $(this)
        .addClass('is-active')
        .find('span').text('В избранном')
    } else (
      $(this)
        .removeClass('is-active')
        .find('span').text('В избранное')
    )
  });
});

// catalog menu
$(() => {
  const btnMenu = document.querySelector('.js-open-header-catalog');
  const lnkMenu = document.querySelector('.js-open-catalog');
  const menu = document.querySelector('.js-catalog-menu');
  const subItem = document.querySelectorAll('.js-catalog-sub-item')
  const toggleMenu = function () {
    menu.classList.toggle('is-open');
    btnMenu.classList.toggle('is-active');
  };
  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
    subItem[0].classList.add('is-active')
    subItem[1].classList.remove('is-active')
  });
  lnkMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
    subItem[1].classList.add('is-active')
    subItem[0].classList.remove('is-active')
  });
  subItem.forEach(function (el) {
    el.addEventListener('mouseover', function () {
      el.classList.remove('is-active');
    })
  })
  subItem.forEach(function (el) {

    el.addEventListener('click', function (e) {
      e.preventDefault();
      el.classList.remove('is-active');
    })
  })
});

// mobile menu
$(() => {
  const btnMenu = document.querySelector('.js-open-mobile-menu');
  const menu = document.querySelector('.js-mobile-menu');
  const toggleMenu = function () {
    menu.classList.add('is-open');
    btnMenu.classList.add('is-active');
  };
  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });
  const closeBtn = document.querySelector('.js-close-mobile-menu');
  const closeMenu = function () {
    menu.classList.remove('is-open');
    btnMenu.classList.remove('is-active');
  };
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeMenu();
  });
});


// change city in header
$(() => {
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
    let menu = $(".js-cities-container");
    if (!menu.hasClass('active')) {
      window.addEventListener('click', closeMenu);
    } else {
      window.removeEventListener('click', closeMenu);
    }
    menu.toggleClass("active");
    $(".js-open-cities").toggleClass('is-active')
  }

  function closeMenu() {
    $(".js-cities-container").removeClass("active")
    $(".js-open-cities").removeClass('is-active')
  }

  $('.js-cities-container').click(function (event) {
    event.stopPropagation();
  });


  $('.cities__input').on('input', function () {
    let search = $(this).val();
    searchData(search);
  });

  function searchData(search) {
    let towns = $('.cities__item');
    towns.each(function () {
      if ($(this).text().indexOf(search) === -1) {
        $(this).addClass('item_hide');
      } else {
        $(this).removeClass('item_hide');
      }
    });
  }
})

// change city in header
$(() => {

  new SimpleBar(document.getElementById('citiesListCabinet'), {
    autoHide: false
  });


  $(".js-open-cities-user").click(function (event) {
    toggleMenu(this);
    event.stopPropagation();
  });

  $('.cities__item').click(function () {
    $('.js-open-cities-user').html($(this).text());
    toggleMenu();
  });

  function toggleMenu() {
    let menu = $(".js-cities-container-user");
    if (!menu.hasClass('active')) {
      window.addEventListener('click', closeMenu);
    } else {
      window.removeEventListener('click', closeMenu);
    }
    menu.toggleClass("active");
    $(".js-open-cities-user").toggleClass('is-active')
  }

  function closeMenu() {
    $(".js-cities-container-user").removeClass("active")
    $(".js-open-cities-user").removeClass('is-active')
  }

  $('.js-cities-container').click(function (event) {
    event.stopPropagation();
  });


})

// change text in small device
$(() => {
  let inpSearch = document.querySelector('.header-search__input');
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
$(() => {
  if ($('#locationsList').length > 0) {
    new SimpleBar(document.getElementById('locationsList'), {
      autoHide: false
    })
  }
})

// dropdown location in cart
$(() => {
  $('.js-open-location-info').on('click', function () {
    $(this)
      .parents('.locations__item')
      .toggleClass('is-active')
      .find('.locations__info').slideToggle();
    $(this).text($(this).text() == 'Как найти' ? 'Свернуть' : 'Как найти');
  });
});

// search loaction in cart
$(() => {
  $('.js-location-input').on('input', function () {
    let search = $(this).val();
    searchData(search);
  });

  function searchData(search) {
    let towns = $('.locations__item');
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
$(() => {
  let changeBtn = $('.js-change-location');
  changeBtn.on('click', function () {
    changeBtn.removeClass('is-active').text('Выбрать')

    if (!($(this).hasClass('is-active'))) {
      $(this)
        .addClass('is-active')
        .text('Выбрано')
    } else {
      $(this).removeClass('is-active').text('Выбрать')
    }

    if (changeBtn.hasClass('is-active')) {
      $('.cart-obtain__btn').removeAttr('disabled')
    } else {
      $('.cart-obtain__btn').attr('disabled', 'true')
    }
  });
});

// show pass in input
$(() => {
  const passField = document.querySelector(".js-show-pass-input");
  const showBtn = document.querySelector(".js-show-pass");
  showBtn.onclick = (() => {
    if (passField.type === "password") {
      passField.type = "text";
      showBtn.classList.add("is-active");
    } else {
      passField.type = "password";
      showBtn.classList.remove("is-active");
    }
  });
});

// dropdown order item in cabinet
$(() => {
  $('.order-list__arrow').on('click', function () {
    $(this).toggleClass('is-active')
    $(this)
      .parents('.order-list__body')
      .find('.order-list-products').slideToggle();

  });
});
