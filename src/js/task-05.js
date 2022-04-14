const greetingsInputEl = document.querySelector("#name-input");

const greetingsOutputEl = document.querySelector("#name-output");

greetingsInputEl.addEventListener("input", onInputChangeName);

function onInputChangeName(event) {
  greetingsOutputEl.textContent = event.currentTarget.value;
  if (greetingsOutputEl.textContent === "") {
    greetingsOutputEl.textContent = "Anonymus";
  }
}
