"use strict";
const navOpenBtn = document.querySelector("[data-nav-open-btn]"),
  navbar = document.querySelector("[data-navbar]"),
  navCloseBtn = document.querySelector("[data-nav-close-btn]"),
  overlay = document.querySelector("[data-overlay]"),
  elemArr = [navCloseBtn, overlay, navOpenBtn];
for (let e = 0; e < elemArr.length; e++)
  elemArr[e].addEventListener("click", function () {
    navbar.classList.toggle("active"), overlay.classList.toggle("active");
  });
const navbarLinks = document.querySelectorAll("[data-navbar-link]");
for (let e = 0; e < navbarLinks.length; e++)
  navbarLinks[e].addEventListener("click", function () {
    navbar.classList.toggle("active"), overlay.classList.toggle("active");
  });
const sliderElm = document.querySelector(".slider-container .slider"),
  btnLeft = document.querySelector(".slider-container .btn-left"),
  btnRight = document.querySelector(".slider-container .btn-right"),
  numberSliderBoxs = sliderElm.children.length;
let idxCurrentSlide = 0;
function moveSlider() {
  let e = (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
  (sliderElm.style.marginLeft = -e + "px"),
    console.log(sliderElm.clientWidth, e);
}
function moveLeft() {
  0 === idxCurrentSlide
    ? (idxCurrentSlide = numberSliderBoxs - 1)
    : idxCurrentSlide--,
    moveSlider();
}
function moveRight() {
  idxCurrentSlide === numberSliderBoxs - 1
    ? (idxCurrentSlide = 0)
    : idxCurrentSlide++,
    moveSlider();
}
btnLeft.addEventListener("click", moveLeft),
  btnRight.addEventListener("click", moveRight),
  window.addEventListener("resize", moveSlider),
  (function () {
    var e = {
        whatsapp: "+2348146367092",
        call_to_action: "Message us",
        button_color: "#FF6550",
        position: "left",
        pre_filled_message: "Hi, I would like to make enquiry ?",
      },
      t = "https:",
      n = "getbutton.io",
      r = t + "//static." + n,
      i = document.createElement("script");
    (i.type = "text/javascript"),
      (i.async = !0),
      (i.src = r + "/widget-send-button/js/init.js"),
      (i.onload = function () {
        WhWidgetSendButton.init(n, t, e);
      });
    var l = document.getElementsByTagName("script")[0];
    l.parentNode.insertBefore(i, l);
  })();
