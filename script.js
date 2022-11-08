const submit = document.getElementById("submit");
const submit2 = document.getElementById("thankyou");
const newpage = document.getElementById("thankyou-page");
const mainpage = document.getElementById("main-page");

submit.addEventListener("click", validateForm);
submit.addEventListener("click", thankYouPage);
submit2.addEventListener("click", backToMainPage);

function thankYouPage() {
  newpage.classList.add("show");
  mainpage.classList.add("hide");
}

function backToMainPage() {
  newpage.classList.remove("show");
  mainpage.classList.remove("hide");
}

function validateForm(e) {
  e.preventDefault();

  console.log("clicked");

  const nameField = document.getElementById("name");
  const numField = document.getElementById("number");
  const monthField = document.getElementById("expmonthError");
  const cvvField = document.getElementById("cvvError");

  let validateForm = true;

  if (!nameField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    nameField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }

  if (!numField.value) {
    const numError = document.getElementById("numError");
    numError.classList.add("visible");
    numField.classList.add("invalid");
    numError.setAttribute("aria-hidden", false);
    numError.setAttribute("aria-invalid", true);
  }

  if (!monthField.value) {
    const monthError = document.getElementById("expmonthError");
    monthError.classList.add("visible");
    monthField.classList.add("invalid");
    monthError.setAttribute("aria-hidden", false);
    monthError.setAttribute("aria-invalid", true);
  }

  if (!cvvField.value) {
    const cvvError = document.getElementById("cvvError");
    cvvError.classList.add("visible");
    cvvField.classList.add("invalid");
    cvvError.setAttribute("aria-hidden", false);
    cvvError.setAttribute("aria-invalid", true);
  }
  thankYouPage();
  return validateForm;
}

let cardField = document.getElementById("number");
let cardField2 = document.getElementById("cardNum");
let cardName = document.getElementById("name");
let cardName2 = document.getElementById("cardName");
let cardMonth = document.getElementById("month");
let cardMonth2 = document.getElementById("cardMonth");
let cardYear = document.getElementById("year");
let cardYear2 = document.getElementById("cardYear");

let cardCvv = document.getElementById("cvv");
let cardCvv2 = document.getElementById("cardCvv");

cardField.addEventListener("keyup", getCardNum);
cardName.addEventListener("keyup", getCardName);
cardMonth.addEventListener("keyup", getCardMonth);
cardYear.addEventListener("keyup", getCardYear);
cardCvv.addEventListener("keyup", getCardCvv);

function getCardNum(e) {
  cardField2.value = e.target.value;
}

// function checkNumber(e) {
//   if ((cardField.value = /^[0-9]$/)) {
//     return true;
//   }
//   else('not corrc')

//   return cardField.test(e.key);
// }
// checkNumber(e)

function getCardName(e) {
  cardName2.value = e.target.value;
}

function getCardMonth(e) {
  2 <= e.target.value.length && focusSibling(e.target, "nextElementSibling");
  e.stopImmediatePropagation();
  cardMonth2.value = e.target.value;
}

function getCardYear(e) {
  cardYear2.value = e.target.value;
}

function getCardCvv(e) {
  cardCvv2.value = e.target.value;
}

const focusSibling = function (target, direction, callback) {
  const nextTarget = target[direction];
  nextTarget && nextTarget.focus();

  callback && callback(nextTarget);
};
