//masked inputs
$(() => {
  Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');
});

//fancybox
$('[data-fancybox=""]').fancybox({
  // Options will go here
});


//inout number
$(() => {
// Убавляем кол-во по клику
  $('.input-count .input-count_minus').click(function () {
    let $input = $(this).parent().find('.js-input-number');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
  });
// Прибавляем кол-во по клику
  $('.input-count .input-count_plus').click(function () {
    let $input = $(this).parent().find('.js-input-number');
    let count = parseInt($input.val()) + 1;
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
$(() => {
  let swiperHero = new Swiper(".js-hero-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
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

[...document.querySelectorAll('.tabs__content')].map(tab => {
  const swiper = tab.querySelector('.swiper');
  const useful_swiper = tab.querySelector('.js-useful-slider');
  if (swiper && useful_swiper) {
    const myMiniSwiper = new Swiper(useful_swiper, {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 40,
      direction: 'horizontal',
      navigation: {
        nextEl: ".useful-button-next",
        prevEl: ".useful-button-prev",
      }
    });
  }
});

// // tabs

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

// catalog menu
$(() => {
  const btnMenu = document.querySelector('.js-open-header-catalog');
  const lnkMenu = document.querySelector('.js-open-catalog');
  const menu = document.querySelector('.js-catalog-menu');
  const toggleMenu = function () {
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
  })
})


// search city
$(() => {
  $(".js-open-cities").click(function (event) {
    toggleMenu();
    event.stopPropagation();
  });

  $('.cities__item').click(function () {
    $('.js-open-cities').html($(this).text());
    toggleMenu();
  });

  function toggleMenu() {
    let menu = $(".cities");
    if (!menu.hasClass('active')) {
      window.addEventListener('click', closeMenu);
    } else {
      window.removeEventListener('click', closeMenu);
    }
    menu.toggleClass("active");
  }

  function closeMenu() {
    $(".cities").removeClass("active")
  }

  $('.cities').click(function (event) {
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

