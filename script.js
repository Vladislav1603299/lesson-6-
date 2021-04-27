var product1 = {
    name: "Штаны мужские",
    price: 100
};

var product2 = {
    name: "Пиджак женский",
    price: 150
};

var product3 = {
    name: "Ветровка мужская",
    price: 300
};

var pants = [];
var jacket = [];
var windbreaker = [];


function addProductPants() {
    pants.push(product1);
    console.log(pants);
    totalAmount();
}


function addProductJacket() {
    jacket.push(product2);
    console.log(jacket);
    totalAmount();
}

function addProductWindbreaker() {
    windbreaker.push(product3);
    console.log(windbreaker);
    totalAmount();
}

function totalAmount() {
    let totalСostJacket = 0;
    for (let i = 0; i < jacket.length; i++) {
        totalСostJacket += jacket[i].price;
        document.getElementById("quantityJacket").innerHTML = ("<br><b>Пиджак женский</b><br>Кол-во: " + jacket.length + " шт.<br>")
    }

    let totalСostPants = 0;
    for (let i = 0; i < pants.length; i++) {
        totalСostPants += pants[i].price;
        document.getElementById("quantityPants").innerHTML = ("<b>Штаны мужские</b><br>Кол-во: " + pants.length + " шт.<br>")
    }

    let totalСostWindbreaker = 0;
    for (let i = 0; i < windbreaker.length; i++) {
        totalСostWindbreaker += windbreaker[i].price;
        document.getElementById("quantityWindbreaker").innerHTML = ("<br><b>Ветровка мужская</b><br>Кол-во: " + windbreaker.length + " шт.<br>")
    }

    document.getElementById("amount").innerHTML = ("<br><b>Общая стоимость составляет:</b> " + (totalСostJacket + totalСostPants + totalСostWindbreaker) + " доллоров.")

}

