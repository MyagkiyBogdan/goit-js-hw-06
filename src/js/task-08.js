// const loginForm = document.querySelector(".login-form");
// const emailInput = loginForm.querySelector('[name="email"]');
// const passwordInput = loginForm.querySelector('[name="password"]');
// const loginFormBtn = loginForm.querySelector("button");

const refs = {
  loginForm: document.querySelector(".login-form"),
  emailInput: document.querySelector('[name="email"]'),
  passwordInput: document.querySelector('[name="password"]'),
  loginFormBtn: document.querySelector("button"),
};

// Попробовал патерн объекта ссылок, хоть он тут и не нужен.

refs.loginForm.addEventListener("submit", onClickSendLoginData);

function onClickSendLoginData(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("Attention! All fields must be filled!");
  } else {
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
      console.log(`${name}: ${value}`);
    });

    event.currentTarget.reset();
  }
}
