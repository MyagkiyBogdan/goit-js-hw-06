const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsItemsEl = ingredients.map(element => {
  const newIngredient = document.createElement("li");

  newIngredient.textContent = element;
  newIngredient.classList.add("item");
  return newIngredient;
});

const ingredientsList = document.querySelector("#ingredients");

ingredientsList.append(...ingredientsItemsEl);
