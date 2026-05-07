import { productsCards } from "./products.js";
//3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.  (Посмотрите сразу задание 5)

const productTemplate = document.getElementById('product-template')
const productList = document.getElementById('product-catalog')

function displayProductCards(productsCards) {
  productsCards.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector('.product-img').src = `./Images/${product.img}.png`
    productClone.querySelector('.product-category').textContent = product.category
    productClone.querySelector('.product-name').textContent = product.name
    productClone.querySelector('.product-description').textContent = product.description
    productClone.querySelector('.product-compound').innerHTML = product.compound.map(item =>
      `<li>${item}</li>`).join("");
    productClone.querySelector('.product-price').textContent = product.price + " \u20BD"
    productList.appendChild(productClone)
  })
}

displayProductCards(productsCards);

//4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productInfo = productsCards.reduce ((acc,currentProduct) => {
  acc[currentProduct.name] = currentProduct.description;
  return acc;
},{});

console.log(productInfo)

///5*. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество. Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)

const showCards = () => {
  const question = prompt("Сколько карточек отобразить? От 1 до 5");
  const numbers = Number(question);
  if (numbers > 0 && numbers <= productsCards.length) {
    displayProductCards(productsCards.slice(0, numbers));
  } else {
    alert("Введите число от 1 до 5");
  }
}

showCards()