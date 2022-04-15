const inputFontSizeControlEl = document.querySelector("#font-size-control");

const changingTextEl = document.querySelector("#text");

inputFontSizeControlEl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  changingTextEl.style.fontSize = `${event.currentTarget.value}px`;
}
