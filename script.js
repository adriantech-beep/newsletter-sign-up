"use strict";
//Flow Chart => 1.Make the layout 2.Ensure that it is responsive even on mobile devices 3.make the buttons change its color while at hover state and active state.
//4.Make sure that the email is validated
//Coded by adrian.dev
const subscribeBtn = document.querySelector(".subscribe-button");
const validEmailNotifier = document.querySelector(".invalid-notifier");
const modalSubmit = document.querySelector(".modal-submit");
const overlay = document.querySelector(".overlay");
const dismissBtn = document.querySelector(".dismiss-btn");

const changeColorBox = function (color) {
  document.querySelector(".form-input").style.borderColor = color;
};
const changeColorBG = function (color) {
  document.querySelector(".form-input").style.backgroundColor = color;
};
const removeHidden = function () {
  modalSubmit.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const addHidden = function () {
  modalSubmit.classList.add("hidden");
  overlay.classList.add("hidden");
};

let formInput = document.querySelector(".form-input");
const validation = function () {
  let formValue = formInput.value;
  if (formValue === "") {
    document.querySelector(".invalid-notifier").textContent =
      "Please fill out form";
    validEmailNotifier.classList.remove("hidden");
    changeColorBox("hsl(4, 100%, 67%)");
    changeColorBG("hsl(4, 100%, 95%)");
    return false;
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formValue)) {
      document.querySelector(".invalid-notifier").textContent =
        "Valid email required";
      validEmailNotifier.classList.remove("hidden");
      changeColorBox("hsl(4, 100%, 67%)");
      changeColorBG("hsl(4, 100%, 95%)");
      return false;
    } else {
      validEmailNotifier.classList.add("hidden");
      document.querySelector(".email-confirm-modal").textContent = formValue;
      return true;
    }
  }
};
subscribeBtn.addEventListener("click", function () {
  if (validation()) {
    formInput.value = "";
    validEmailNotifier.classList.add("hidden");
    changeColorBox("#000");
    changeColorBG("#fff");
    removeHidden();
  }
});

dismissBtn.addEventListener("click", addHidden);
