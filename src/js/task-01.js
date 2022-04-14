const categoriesListEl = document.querySelector("#categories");
const totalCategories = categoriesListEl.querySelectorAll(".item");

console.log(`Number of categories: ${totalCategories.length}`);

const singleCategory = totalCategories.forEach(category => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
});
