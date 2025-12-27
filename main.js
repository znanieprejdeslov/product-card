//покраска всех карточек

const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00FF00'
const blueColorHash = '#0000FF'

 changeColorAllCardButton.addEventListener('click',() => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
 })


// покраска первой карточки

const firstproductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click',() => {
  firstproductCard.style.backgroundColor = blueColorHash;
 })

 // открыть google

const openGoogleButton = document.querySelector('#open-google')

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?')

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
 }

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('Д3 №4'))

function outputConsoleLog(message) {
  console.log(message)
}

const consoleTitle = document.querySelector('.title')

consoleTitle.addEventListener('mouseover', () => {
  console.log(consoleTitle.textContent)
})

// Сменить цвета 

const changeColor = document.getElementById("change-color");

changeColor.addEventListener('click', e => {
changeColor.classList.toggle("change-color-purple")
})

