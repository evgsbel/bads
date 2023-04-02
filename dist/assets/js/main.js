"use strict";

// catalog menu
$(function () {
  window.addEventListener('resize', openCatalogMenu);
  openCatalogMenu.call(window);
  function openCatalogMenu() {
    var btnMenu = document.querySelector('.js-open-header-catalog');
    var menu = document.querySelector('.js-catalog-menu');
    var btnClose = document.querySelector('.js-catalog-menu-closing');
    var subItem = document.querySelectorAll('.js-catalog-sub-item');
    var lnkMenu = document.querySelector('.js-open-catalog');
    var lnkMenuMobile = document.querySelector('.js-open-catalog-mobile');
    var subCaption = document.querySelector('.js-sub-caption');
    var btnCloseSubcategory = document.querySelector('.js-close-subcategory-mobile');
    var fixedHeader = document.querySelector('.js-desktop-fixed');
    var toggleMenu = function toggleMenu() {
      menu.classList.toggle('is-open');
      btnMenu.classList.toggle('is-active');
    };
    if (window.innerWidth > 1024) {
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
        btnCloseSubcategory.classList.remove('is-hide');
        btnCloseSubcategory.classList.add('is-back');
        for (var i = 0; i < subItem.length; i++) {
          subItem[i].classList.add('from-link');
        }
        fixedHeader.classList.add('position-static');
      });
      subItem.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          el.classList.add('is-active');
          btnCloseSubcategory.classList.remove('is-hide', 'is-back');
          if (el.classList.contains('from-link')) {
            btnCloseSubcategory.classList.add('back-main');
          }
          var subCaptionAttr = el.dataset.caption;
          subCaption.innerHTML = subCaptionAttr;
        });
      });
      btnCloseSubcategory.addEventListener('click', function (e) {
        this.classList.add('is-hide');
        for (var i = 0; i < subItem.length; i++) {
          subItem[i].classList.remove('is-active');
        }
        if (this.classList.contains('is-back')) {
          toggleMenu();
          fixedHeader.classList.remove('position-static');
        }
        if (this.matches('.is-hide.back-main')) {
          toggleMenu();
          this.classList.remove('back-main');
          for (var _i = 0; _i < subItem.length; _i++) {
            subItem[_i].classList.remove('from-link');
          }
        }
        subCaption.innerHTML = 'Каталог';
      });
    }
    btnClose.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMenu();
    });
  }
});