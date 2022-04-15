function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  changeColorBtn: document.querySelector(".change-color"),
  bodyColorText: document.querySelector(".color"),
};

refs.bodyEl.addEventListener("click", onClickChangeBodyColor);

function onClickChangeBodyColor(event) {
  refs.bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  refs.bodyColorText.textContent = `${getRandomHexColor()}`;
}
