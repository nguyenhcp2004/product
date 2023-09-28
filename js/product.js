import { fetchApi } from "./fetchApi.js";
import { drawProduct } from "./drawProduct.js";
import { params } from "./variables.js";
//Hiển thị danh sách sản phẩm
drawProduct();
// Hết Hiển thị danh sách sản phẩm


//Tìm kiếm sản phẩm
const inputSearch = document.querySelector("#search input");
const buttonSearch = document.querySelector("#search button");

const search = () => {
  const value = inputSearch.value;
  params.q = value;
  drawProduct();
}

buttonSearch.addEventListener("click", () => {
  search();
})

inputSearch.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    search();
  }
})
//Hết Tìm kiếm sản phẩm

// Pagination
const paginationPrev = document.querySelector("#pagination-prev");
const paginationNumber = document.querySelector("#pagination-number");
const paginationNext = document.querySelector("#pagination-next");


paginationNext.addEventListener("click", () => {
  params.page++;
  paginationNumber.innerHTML = params.page;
  drawProduct();
})

paginationPrev.addEventListener("click", () => {
  if(params.page > 1){
    params.page--;
    paginationNumber.innerHTML = params.page;
    drawProduct();
  }
})
// End Pagination

//Sắp xếp
const filter = document.querySelector("#filter");
filter.addEventListener("change", (e) => {
  const value = e.target.value;

  switch(value) {
    case "mac-dinh" :
      params.sort = "";
      params.order = "";
      break;
    case "gia-thap-den-cao" :
      params.sort = "price";
      params.order = "asc";  
      break;
    case "gia-cao-den-thap" :
      params.sort = "price";
      params.order = "desc"
      break;      
    case "giam-gia-nhieu" :
      params.sort = "discountPercentage"
      params.order = "desc"
      break;
    default:
      break;
  }

  drawProduct();
})
//Hết Sắp xếp