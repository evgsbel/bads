//masked inputs

Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');

$('[data-fancybox=""]').fancybox({
  // Options will go here
});

//open catalog
$(document).ready(function () {
  $('.js-open-header-catalog').click(function () {
    $(this).toggleClass('is-active');
  });
  $('.js-add-to-favorite').click(function () {
    $(this).toggleClass('is-active');
  })
});

//inout number
$(() => {
// Убавляем кол-во по клику
  $('.input-count .input-count_minus').click(function() {
    let $input = $(this).parent().find('.js-input-number');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
  });
// Прибавляем кол-во по клику
  $('.input-count .input-count_plus').click(function() {
    let $input = $(this).parent().find('.js-input-number');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
  });
// Убираем все лишнее и невозможное при изменении поля
  $('.input-count .js-input-number').bind("change keyup input click", function() {
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

// hero slider
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
