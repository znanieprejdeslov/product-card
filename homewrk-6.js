
//3.Создайте объект на основе ваших данных
const user = {
  name: 'Nazim',
  age: '31',
  country: 'Kazakhstan',
  city: 'Almaty',
  job: 'Auditor'
}

//4.Создайте объект, который будет хранить данные об автомобиле
const car = {
  brand: 'Toyota',
  model: 'RAV4',
  year: '1994',
  color: 'red',
  transmission: 'automatic'
}

carOwner = user;

//5.Написать функцию которая аргументом будет принимать объект,
function checkMaxSpeed (car){
  if ('maxSpeed' in car){
    return
  } else {
    car.maxSpeed = 225;
  }
}

//6. Написать функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.
const carBrand = (car,Toyota) => {
  console.log(car,[Toyota]);
}

//7. Создать массив, который содержит названия продуктов (просто строки)
const vegetables = ['Тыква', 'огурец', 'помидор', 'картошка', 'баклажан']

//8. Создать массив, состоящий из объектов, где объект представляет собой книгу (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг).
const infoBook = [{
  'name': 'Белый Клык','auhtor': 'Джек Лондон','year': '1906','color': 'Зеленая',

  'name': 'Зов Предков','auhtor': 'Джек Лондон','year': '1903','color': 'красная',

  'name': 'Бегущий за Ветром','auhtor': 'Халед Хоссейни','year': '2003','color': 'синяя',
  
  'name': 'Тысяча сияющий солнц','auhtor': 'Халед Хоссейни','year': '2007','color': 'желтая'
}]

infoBook.push({'name': 'Оно','auhtor': 'Стивен Кинг','year': '1986','color': 'черная',})

const GarryPotterMultiverse = [{
  'name': 'Гарри Поттер и Философский камень','auhtor': 'Дж. К. Роулинг','year': '1997','color': 'Зеленая',

  'name': 'Гарри Поттер и Тайная Комната','auhtor': 'Дж. К. Роулинг','year': '1998','color': 'красная',

  'name': 'Гарри Поттер и узник Азкабана','auhtor': 'Дж. К. Роулинг','year': '1999','color': 'синяя',
  
  'name': 'Гарри Поттер и Кубок Огня','auhtor': 'Дж. К. Роулинг','year': '2000','color': 'желтая'
}]


const books = { ...infoBook, ...GarryPotterMultiverse}

//10. Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей с задания №9. 
const isRareBook = (rareBook) => {
  return rareBook.map((books)=> {
    if (books.year>1997) {
      books.isRare = true
    } else {
      books.isRare = false
    }
    return books
  })
}

isRareBook(books)