//Homework-5 создание функций
function showTemperature(city, temperature ) {
  console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`)
}

showTemperature('Алматы', '25')

const LIGHT_SPEED = (299792458)
  function currentSpeed (speed) {
    if (speed > LIGHT_SPEED) {
      console.log("сверхсветовая скорость")
    }
    else if (speed < LIGHT_SPEED) 
      { console.log("Субсветовая скорость") 
    }
    else { 
      console.log("скорость света")
    }
  }

  currentSpeed(300000000)

const productName = ('Самокат')
const productPrice = (500)
  function buyProduct (budget) {
    if (budget >= productPrice)
      console.log('Самокат приобретен.Спасибо за покупку')
    else 
      console.log(`Вам не хватает ${productPrice-budget}`)   
  }

buyProduct(200)

function showSkills () {

}

const computerName = ("Компьютер 1");
let heroName = ("Primal Beast");
const skillsLevel = ("Level 5");  

