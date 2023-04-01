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
// add to cart text
$('.js-add-to-cart').click(function () {
  $(this).text('В корзине')
})
// catalog menu
$(() => {
  window.addEventListener('resize', openCatalogMenu);
  openCatalogMenu.call(window);
  function openCatalogMenu() {
    const btnMenu = document.querySelector('.js-open-header-catalog');
    const menu = document.querySelector('.js-catalog-menu');
    const btnClose = document.querySelector('.js-catalog-menu-closing');
    const subItem = document.querySelectorAll('.js-catalog-sub-item')
    const lnkMenu = document.querySelector('.js-open-catalog');
    const lnkMenuMobile = document.querySelector('.js-open-catalog-mobile');
    const subCaption = document.querySelector('.js-sub-caption');
    const btnCloseSubcategory = document.querySelector('.js-close-subcategory-mobile');
    const fixedHeader = document.querySelector('.js-desktop-fixed');
    const toggleMenu = function () {
      menu.classList.toggle('is-open');
      btnMenu.classList.toggle('is-active');
    };
    if (window.innerWidth > 1024) {
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
    } else {
      btnMenu.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        toggleMenu();
      });
      lnkMenuMobile.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        toggleMenu();
        btnCloseSubcategory.classList.remove('is-hide')
        btnCloseSubcategory.classList.add('is-back')
        for (let i = 0; i < subItem.length; i++) {
          subItem[i].classList.add('from-link')
        }
        fixedHeader.classList.add('position-static')
      });
      subItem.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          el.classList.add('is-active');
          btnCloseSubcategory.classList.remove('is-hide', 'is-back')
          if (el.classList.contains('from-link')) {
            btnCloseSubcategory.classList.add('back-main')
          }
          const subCaptionAttr = el.dataset.caption
          subCaption.innerHTML = subCaptionAttr
        })
      })
      btnCloseSubcategory.addEventListener('click', function (e) {

        for (let i = 0; i < subItem.length; i++) {
          subItem[i].classList.remove('is-active')
        }
        if (this.classList.contains('is-back')) {
          toggleMenu();
          fixedHeader.classList.remove('position-static')
        }
        if (this.matches('.is-hide.back-main')) {
          toggleMenu();
          this.classList.remove('back-main')
          for (let i = 0; i < subItem.length; i++) {
            subItem[i].classList.remove('from-link')
          }
        }
        this.classList.add('is-hide')

        subCaption.innerHTML = 'Каталог'
      })
    }
    btnClose.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMenu();
    })
  }

});

// mobile menu
$(() => {
  const btnMenu = document.querySelectorAll('.js-open-mobile-menu');
  const menu = document.querySelector('.js-mobile-menu');

  btnMenu.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.add('is-open');
    });
  })

  const closeBtn = document.querySelector('.js-close-mobile-menu');
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.remove('is-open');
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
  if ($('#citiesListCabinet').length > 0) {
    new SimpleBar(document.getElementById('citiesListCabinet'), {
      autoHide: false
    })
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
    placeholder: 'Сортировать по',
    width: 'resolve',
  }).on('select2:select', function () {
    $(this)
      .parent()
      .find('.js-clear-select')
      .addClass('is-active')
  });
  $('.js-select-brand').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Бренды',
  }).on('select2:select', function () {
    $(this)
      .parent()
      .find('.js-clear-select')
      .addClass('is-active')
  });
  $('.js-select-indication').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Показания',
  }).on('select2:select', function () {
    $(this)
      .parent()
      .find('.js-clear-select')
      .addClass('is-active')
  });
  $('.js-select-forms').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Форма выпуска',
  }).on('select2:select', function () {
    $(this)
      .parent()
      .find('.js-clear-select')
      .addClass('is-active')
  });
  $('.js-clear-select').click(function () {
    $(this).removeClass('is-active');
    $(this)
      .parent()
      .find('select')
      .val(null).trigger('change');
  })
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

// search location in cart
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
  if ($('.js-show-pass').length > 0) {
    showBtn.onclick = (() => {
      if (passField.type === "password") {
        passField.type = "text";
        showBtn.classList.add("is-active");
      } else {
        passField.type = "password";
        showBtn.classList.remove("is-active");
      }
    });
  }
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


// map
$(() => {
  if ($('#map').length > 0) {
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
      }
      let changeBtn = $('.js-change-location')
      changeBtn.on('click', function (e) {
        e.preventDefault();

        var pos = $(this).data('map');

        // переходим по координатам
        myMap.panTo(destinations[pos], {
          flying: true,
          delay: 1500
        }).then(function () {
          myMap.options.set('maxAnimationZoomDifference', Infinity);
          myMap.setZoom(17, {duration: 1500});
        });

      });

      for (let pls of Object.keys(destinations)) {
        var myPlacemark = new ymaps.Placemark(destinations[pls], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'assets/img/map-icon.png',
          iconImageSize: [40, 40],
          iconContent: pls

        });
        myMap.geoObjects
          .add(myPlacemark);

        myPlacemark.events.add('click', function (e) {

          let activeGeoObject = e.get('target');
          let iconContent = activeGeoObject.options.get('iconContent')
          changeBtn.removeClass('is-active').text('Выбрать')

          $('.cart-obtain__btn').attr('disabled', 'true')
          changeBtn.each(function () {
            let btnAttr = $(this).data('map')
            if (iconContent === btnAttr) {
              $(this).toggleClass('is-active').text('Выбрано')
              $('.locations__item').addClass('item_hide')
              $(this).parents('.locations__item').removeClass('item_hide')
              $('.cart-obtain__btn').removeAttr('disabled')
            }
          });
        })
      }
    }
  }
})

// cart steps
$("#wizard").steps({
  headerTag: "h2",
  transitionEffect: $.fn.steps.transitionEffect.slideLeft,
  transitionEffectSpeed: 200,
  titleTemplate: '#title#',
  labels: {
    next: "Далее <svg width='21' height='16' viewBox='0 0 21 16' fill='none' xmlns='http://www.w3.org/2000/svg'>\n" +
      "  <path d='M1 8H20M20 8L13 1M20 8L13 15' stroke='white' stroke-linecap='round' stroke-linejoin='round'/>\n" +
      "</svg>",
    previous: "<svg width='21' height='16' viewBox='0 0 21 16' fill='none' xmlns='http://www.w3.org/2000/svg'>\n" +
      "  <path d='M20 8H1M1 8L8 1M1 8L8 15' stroke='#2688E5' stroke-linecap='round' stroke-linejoin='round'/>\n" +
      "</svg> Вернуться",
    finish: "Оформить"
  }
})


// hide mobile blocks

$('.js-open-mobile-sorting').click(function () {
  $('.js-hide-sort').addClass('is-open');
})
$('.js-open-mobile-filters').click(function () {
  $('.js-hide-filters').addClass('is-open');
})
$('.js-filters-closing').click(function () {
  $('.hide-filters').removeClass('is-open');
})
$('.js-clear-filters').click(function () {
  console.log('click')
  $('#sales').prop('checked', false);
  $('#filter-price-min').val('');
  $('#filter-price-max').val('');
})

// fixed header
$(() => {
  window.addEventListener('scroll', function () {
      function stickySidebar() {
        let scrollDistance = $(document).scrollTop(),
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
    })
})
