
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const name = params.get("id");

const url = "http://localhost:1337/products/" + name;

const container = document.querySelector(".container_detail");

  async function getProductDetails() {

  
  try {
      const response = await fetch(url);
      const details = await response.json();

      
      console.log("details", details);
    
      
      html = `
                <div class="row">
                <div class="col-sm-6">
                <img class="img-detail" src="http://localhost:1337${details.image.url}" alt=""/>
                </div>
                <div class="col-sm-4">
                <h4>${details.title}</h4>
                <h5>${details.price}</h5>
                <a class="btn-dark" href="">Add to cart</a>
                </div>     
                </div>
                <div class="product-info">
                <h4>Product Info</h4>
                <p>${details.description}</p>
                </div>`;
        container.innerHTML = html;
      
  } catch (error) {
    console.log(error + "Something is wrong");
    
} finally {
    console.log("evrything is done!");
}
}

getProductDetails();