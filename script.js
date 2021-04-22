

//Получаем товар по ID
let product1 = document.getElementById("product1")
/*let dataPrice1 = product1.getAttribute("data-price1")*/
product1.onclick = addProduct;

//Получаем товар по ID
let product2 = document.getElementById("product2")
/*let dataPrice2 = product2.getAttribute("data-price2")*/
product2.onclick = addProduct;


//Записываем массив продукции
let arr = [];

function addProduct() {
    alert(this.getAttribute("data-price"))

}