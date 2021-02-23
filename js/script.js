
import { baseUrl } from "./constants/api.js";
import { productsUrl } from "./constants/api.js";
import { displayMessage } from "./constants/displayMessage.js";
const resultsContainer = document.querySelector(".section-shop-product");


export async function getProductsJson() {
  try {
      const response = await fetch(productsUrl);
      const jsonResult = await response.json();
      getFeatured(jsonResult);
      getProducts(jsonResult);
      
  } catch (error) {
      console.log(error);
      resultsContainer.innerHTML = displayMessage("error", error);
  }
}

getProductsJson();


 function getProducts(products) {
  
  const container = document.querySelector(".section-shop-product");
  let html = "";
  for (let i = 0; i < products.length; i++) {
    const imageUrl = baseUrl + products[i].image.url;
    console.log("html", html);

    if (!products[i].title) {
         
      continue;
  }
      html += `<div class="section-shop-card">
                      <img class="image" src="${imageUrl}" alt=""/>
                      <h4 class="title">${products[i].title}</h4>
                      <h4 class="title">${products[i].price}</h4>
                      <a class="btn-dark" href="detail.html?id=${products[i].id}">View more</a>
                     
                </div>`;
  }
  
  container.innerHTML = html;
}


  function getFeatured(products) {
    
  const container = document.querySelector(".section-shop-product");
  let html = "";
  for (let i = 0; i < products.length; i++) {

    const imageUrl = baseUrl + products[i].image.url;

    console.log("html", html);
    if (products[i].featured) {
        continue; 
      }
      html += `<div class="section-shop-card">
                      <div class="featured-flag-dark">NEW</div>
                      <img class="image" src="${imageUrl}" alt=""/>
                      <h4 class="title">${products[i].title}</h4>
                      <a class="btn-dark" href="detail.html?id=${products[i].id}">View more</a>
                     
                </div>`;
  }
  
  container.innerHTML = html;
}










