
renDerShoeRelate = (arrShoe) => {
    let htmlCard = "";
    for (let shoe of arrShoe) {
      htmlCard += `
      <div class="item col-3">
      <img src=${shoe.image} alt="">
      <div class="name">${shoe.name}</div>
      <div class="descript">${
          shoe.description.length > 20
            ? shoe.description.substr(0, 20) + "..."
            : shoe.description
        }</div>
      <a class="buy" href="./detail.html?id=${shoe.id}">Buy now</a>
      <div class="money">${shoe.price}$</div>
  </div>
          `;
    }
    document.querySelector("#list-shoes").innerHTML=htmlCard;
  };
  
  getAPIShoe = (id_shoe) => {
    let promise = axios({
      url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id_shoe}`,
      method:'GET'
    })
    promise.then((shoe) => {
      renDerShoeDetail(shoe.data.content)
      renDerShoeRelate(shoe.data.content.relatedProducts)
    })
  }
  
  renDerShoeDetail= (shoe) => {
    console.log(shoe.image);
    document.querySelector("#shoe-detail").innerHTML = `
    <div class="detail">
    <div class="img">
        <img src=${shoe.image} alt="">
    </div>
    <div class="name">${shoe.name}</div>
    <div class="descript">${shoe.description}</div>
    <div class="available">Available size</div>
    <div class="sizes">
        <span>${shoe.size[0]}</span>
        <span>${shoe.size[1]}</span>
        <span>${shoe.size[2]}</span>
        <span>${shoe.size[3]}</span>
        <span>${shoe.size[4]}</span>
        <span>${shoe.size[5]}</span>
        <span>${shoe.size[6]}</span>
    </div>
    <div class="money">${shoe.price}$</div>
    <button class="up">+</button>
    <div class="num">1</div>
    <button class="down">-</button>
    <div class="add">Add to cart</div>
</div>

    
    `;
  }
  
  searchDetailShoe = () =>{
    let urlParams = new URLSearchParams(window.location.search);
    getAPIShoe(urlParams.get('id'));
  }
  searchDetailShoe();
  