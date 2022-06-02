async function createHtml (id, img, altTxt, name, price, color, quantity) {
    storageList = await getProductDetails();
    let productArticle = document.createElement("article");
        document.querySelector("#cart__items").appendChild(productArticle);
        productArticle.className = "cart__item";
        productArticle.setAttribute("data-id", id);

        let productDivImg = document.createElement("div");
        productArticle.appendChild(productDivImg);
        productDivImg.className = "cart__item__img";

        let productImg = document.createElement("img");
        productDivImg.appendChild(productImg);
        productImg.src = img;
        productImg.alt = altTxt;

        let productItemContent = document.createElement("div");
        productArticle.appendChild(productItemContent);
        productItemContent.className = "cart__item__content";

        let productItemContentDescription = document.createElement("div");
        productItemContent.appendChild(productItemContentDescription);
        productItemContentDescription.className =
        "cart__item__content__description";

        let productTitle = document.createElement("h2");
        productItemContentDescription.appendChild(productTitle);
        productTitle.innerHTML = name;

        let productColor = document.createElement("p");
        productTitle.appendChild(productColor);
        productColor.innerHTML = color;
        productColor.style.fontSize = "20px";

        let productPrice = document.createElement("p");
        productItemContentDescription.appendChild(productPrice);
        productPrice.innerHTML = price + " €";

        let productItemContentSettings = document.createElement("div");
        productItemContent.appendChild(productItemContentSettings);
        productItemContentSettings.className = "cart__item__content__settings";

        let productItemContentSettingsQuantity = document.createElement("div");
        productItemContentSettings.appendChild(productItemContentSettingsQuantity);
        productItemContentSettingsQuantity.className =
        "cart__item__content__settings__quantity";

        let productQty = document.createElement("p");
        productItemContentSettingsQuantity.appendChild(productQty);
        productQty.innerHTML = "Qté : ";

        let productQuantity = document.createElement("input");
        productItemContentSettingsQuantity.appendChild(productQuantity);
        productQuantity.value = quantity;
        productQuantity.className = "itemQuantity";
        productQuantity.setAttribute("type", "number");
        productQuantity.setAttribute("min", "1");
        productQuantity.setAttribute("max", "100");
        productQuantity.setAttribute("name", "itemQuantity");

        let productItemContentSettingsDelete = document.createElement("div");
        productItemContentSettings.appendChild(productItemContentSettingsDelete);
        productItemContentSettingsDelete.className =
        "cart__item__content__settings__delete";

        let productSupprimer = document.createElement("p");
        productItemContentSettingsDelete.appendChild(productSupprimer);
        productSupprimer.className = "deleteItem";
        productSupprimer.innerHTML = "Supprimer";
}



for (let i = 0; i < storageList.length; i++) {
    let id = storageList[i].id;
    let img = storageList[i].imageUrl;
    let altTxt = storageList[i].altTxt;
    let name = storageList[i].name;
    let price = storageList[i].price;
    let color = storageList[i].colorChoice;
    let quantity = storageList[i].number;
    let target = productSupprimer;
    function createHtml (id, img, altTxt, name, price, color, quantity)
}