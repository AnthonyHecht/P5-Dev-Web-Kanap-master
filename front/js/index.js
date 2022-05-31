//Je récupere la liste des produits de l'API
async function getProducts() {
    let products = await fetch('http://localhost:3000/api/products');
    return products.json();
}

getProducts();

//j'insère la liste des produits dans l'html
async function createProducts() {
    let result = await getProducts()
    .then( (product) => {
        for (let i=0; i < product.length; i++) {		

            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);
            productLink.href = `product.html?id=${product[i]._id}`;

            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);

            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src = product[i].imageUrl;
            productImg.alt = product[i].altTxt;

            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = product[i].name;

            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productName");
            productDescription.innerHTML = product[i].description;
        }
    });
};

createProducts();