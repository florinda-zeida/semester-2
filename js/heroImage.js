
import { heroImgUrl } from "./constants/api.js";
import { displayMessage } from "./constants/displayMessage.js";
const container = document.querySelector(".hero-img");

async function getHeroImage() {

  try {
      const response = await fetch(heroImgUrl);
      const results = await response.json();
      let html = "";
      console.log(results);
     
      html = `<img src="http://localhost:1337${results.hero_banner.url}" alt="" />
      <div class="hero-text">
                      <h1>Mio Donna</h1>
                      <p>Discover the Collection</p>
                      <a  href="shop.html"><button type="button" class="btn-outline-light">Shop Now</button></a>
                  </div>
      `;

        container.innerHTML = html;
      
  } catch (error) {
    console.log(error);
    container.innerHTML = displayMessage("error", error);
}
}

getHeroImage();