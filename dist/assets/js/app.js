"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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

//add to favorite

//inout number
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

// search city
_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var toggleMenu, closeMenu, searchData, response, array, parent;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        toggleMenu = function toggleMenu() {
          var menu = $(".cities");
          if (!menu.hasClass('active')) {
            window.addEventListener('click', closeMenu);
          } else {
            window.removeEventListener('click', closeMenu);
          }
          menu.toggleClass("active");
          $(".js-open-cities").toggleClass('is-active');
        };
        closeMenu = function closeMenu() {
          $(".cities").removeClass("active");
        };
        searchData = function searchData(search) {
          var towns = $('.cities__item');
          towns.each(function () {
            if ($(this).text().indexOf(search) === -1) {
              $(this).addClass('item_hide');
            } else {
              $(this).removeClass('item_hide');
            }
          });
        };
        _context.next = 6;
        return fetch("assets/data/city.json");
      case 6:
        response = _context.sent;
        _context.next = 9;
        return response.json();
      case 9:
        array = _context.sent;
        parent = document.querySelector('.cities__list');
        array.forEach(function (item) {
          var elem = document.createElement("li");
          elem.classList.add('cities__item');
          elem.innerHTML = "".concat(item.city);
          parent.appendChild(elem);
        });
        new SimpleBar(document.getElementById('citiesList'), {
          autoHide: false
        });
        $(".js-open-cities").click(function (event) {
          toggleMenu();
          event.stopPropagation();
        });
        $('.cities__item').click(function () {
          $('.js-open-cities').html($(this).text());
          toggleMenu();
        });
        $('.cities').click(function (event) {
          event.stopPropagation();
        });
        $('.cities__input').on('input', function () {
          var search = $(this).val();
          searchData(search);
        });
        _context.next = 22;
        break;
      case 19:
        _context.prev = 19;
        _context.t0 = _context["catch"](0);
        alert("Error: " + _context.t0);
      case 22:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[0, 19]]);
}))();

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