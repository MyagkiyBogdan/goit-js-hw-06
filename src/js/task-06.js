const inputEl = document.querySelector("#validation-input");

const maxSymbolsValue = inputEl.dataset.length;

inputEl.addEventListener("blur", onInputBlurClassAdd);

inputEl.addEventListener("focus", onInputFocusClassClear);

function onInputBlurClassAdd(event) {
  if (
    event.currentTarget.value.length <= maxSymbolsValue &&
    event.currentTarget.value.length >= 1
  ) {
    inputEl.classList.add("valid");
  } else if (event.currentTarget.value.length === 0) {
  } else {
    inputEl.classList.add("invalid");
  }
}

function onInputFocusClassClear() {
  inputEl.classList.remove("valid", "invalid");
}
