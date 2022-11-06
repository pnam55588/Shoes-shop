getAllShoeApi = () => {
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    promise.then((res) => {
      console.log(res);
      renderProduct(res.data.content);
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
  
  renderProduct = (data) => {
    let html = "";
    // querry shoe to show in list product
    for (let shoe of data) {
      html += `
          
        <div class="item col-3">
            <img src=${shoe.image} alt="">
            <div class="name">${shoe.name}</div>
            <div class="descript">${
                shoe.description.length > 20
                  ? shoe.description.substr(0, 20) + "..."
                  : shoe.description
              }</div>
            <a class="buy" href="./pages/detail.html?id=${shoe.id}">Buy now</a>
            <div class="money">${shoe.price}$</div>
        </div>
          `;
    }
    document.querySelector("#list-card").innerHTML = html;
  
    // querry on carousel
    let htmlCarousel = "";
    for (let index in data) {
          htmlCarousel += `
          <div class="carousel-item ${data[index].id==1?"active":""}">
          <div class="item-content row justify-content-between">
            <img
              src=${data[index].image}
              class="d-block col-6 "
              alt="..."
            />
            <div class="carousel-content col-5">
              <h3 class="d-md-block d-none">${data[index].name}</h3>
              <p class="d-md-block d-none">${data[index].description.length>20?data[index].description.substr(0,20)+"...":data[index].description}</p>
              <a href="">Buy now</a>
            </div>
          </div>
          </div>
          `;
      
    }
  
    document.querySelector(".carousel-inner").innerHTML=htmlCarousel;
  };
  
  getAllShoeApi();
  
  
  