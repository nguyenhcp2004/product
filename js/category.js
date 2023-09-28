import { fetchApi } from "./fetchApi.js";
import { drawProduct } from "./drawProduct.js";
import { params } from "./variables.js";
import { API_CATEGORY } from "./constant.js";

const elementCategory  = document.querySelector("#category")

fetchApi(`${API_CATEGORY}`)
 .then(data => {
    let arrayHTML = data.map((item) => {
        return `
        <div class="category-item" data-category = "${item}">
        ${item}
        </div>
        `;
    });

    elementCategory.innerHTML = arrayHTML.join("");

    const listCategory = document.querySelectorAll(".category-item");
    listCategory.forEach(item => {
        item.addEventListener("click", () => {
            const data = item.getAttribute("data-category");
            params.category = data;

            drawProduct();
        })
    })
 })