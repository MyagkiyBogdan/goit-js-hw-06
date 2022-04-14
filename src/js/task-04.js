const decrementButton = document.querySelector('button[data-action="decrement"]');

const incrementButton = document.querySelector('button[data-action="increment"');

const counterValueEl = document.querySelector("#value");

let counterValue = 0;

decrementButton.addEventListener("click", onDecrementButtonClick);

incrementButton.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}

function onIncrementButtonClick() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}
