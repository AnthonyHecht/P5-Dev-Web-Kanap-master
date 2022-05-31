//je récupere l'id via l'url
const id = new URL(window.location.href).searchParams.get("id");

//je prépare mes sélécteurs
let titleProduct = document.getElementById("title");
let priceProduct = document.getElementById("price");
let descriptionProduct = document.getElementById("description");
let colorsProduct = document.getElementById("colors");
let imgProduct = document.querySelector(".item__img");
let img = document.querySelector(".item__img img");

//je récupère l'article grace a l'id et j'affiche ses détails
async function getArticle() {
     await fetch("http://localhost:3000/api/products/" + id)
    .then((response) => response.json())    
    .then(product => {
        img.setAttribute("src", product.imageUrl);
        img.setAttribute("alt", product.altTxt);    
        titleProduct.innerHTML = product.name;
        priceProduct.innerHTML = product.price;
        descriptionProduct.innerHTML = product.description;
        document.title = product.name;

        for (let i=0; i < product.colors.length; i++) {
            let color = document.createElement("option");
            color.setAttribute("value", product.colors[i]);
            color.innerHTML = product.colors[i];
            colorsProduct.appendChild(color);
        }  
    });          
};

getArticle();

//fonction ajout au panier
function addToCart() {
    class StorageProduct {
        constructor(id, number, colorChoice) {
            this.id = id;
            this.number = number;
            this.colorChoice = colorChoice;
        }
      }
    document
          .getElementById("addToCart")
          .addEventListener('click', function() {
              //recup des valeurs saisies
              let number = parseInt(document.getElementById("quantity").value);
              let colorChoice = document.getElementById("colors").value;
              const newProduct = new StorageProduct(id, number, colorChoice);
              //on récup ce qui existe dans le localstorage
              let checkLocal = localStorage.getItem('myArray');
              //j'init productList en tableau vide pour pouvoir travailler dessus
              let productList = [];
              if (checkLocal != null) {
                  productList = JSON.parse(checkLocal);
              };
              //find pour faire correspondre le produit au localstorage
              if (number == 0 || colorChoice == 0) {
                  alert("erreur");
              } else { 
              let found = productList.find(product => (newProduct.id == product.id && newProduct.colorChoice == product.colorChoice));
              if (found) {
                  found.number += newProduct.number;
              } else {
                  productList.push(newProduct);
              }        
              localStorage.setItem('myArray', JSON.stringify(productList));
          }
          });
}

addToCart();