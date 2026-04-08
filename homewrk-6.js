
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

car.owner = user;

console.log(car)

//5.Написать функцию которая аргументом будет принимать объект,ёё
function checkMaxSpeed (car) {
  if ( !('maxSpeed' in car) ) {
    car.maxSpeed = 225;
  }
}

//6. Написать функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.
const getPropertyValue = (obj, key) => {
  console.log(obj[key]);
}

getPropertyValue(car,'brand');

//7. Создать массив, который содержит названия продуктов (просто строки)
const vegetables = ['Тыква', 'огурец', 'помидор', 'картошка', 'баклажан'];

//8. Создать массив, состоящий из объектов, где объект представляет собой книгу (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг).
const allBooks = [{
  'name': 'Белый Клык',
  'author': 'Джек Лондон',
  'year': '1906',
  'color': 'Зеленая'
  },

  {
    'name': 'Зов Предков',
  'author': 'Джек Лондон',
  'year': '1903',
  'color': 'красная'
  },

  {
    'name': 'Бегущий за Ветром',
  'author': 'Халед Хоссейни',
  'year': '2003',
  'color': 'синяя'
  },
  
  {
    'name': 'Тысяча сияющий солнц',
  'author': 'Халед Хоссейни',
  'year': '2007',
  'color': 'желтая'
}];

allBooks.push({
  'name': 'Оно',
  'author': 'Стивен Кинг',
  'year': '1986',
  'color': 'черная',
});

const garryPotterMultiverse = [{
  'name': 'Гарри Поттер и Философский камень',
  'author': 'Дж. К. Роулинг',
  'year': '1997',
  'color': 'Зеленая'},

  {
    'name': 'Гарри Поттер и Тайная Комната',
  'author': 'Дж. К. Роулинг',
  'year': '1998',
  'color': 'красная'
  },

  {
    'name': 'Гарри Поттер и узник Азкабана',
  'author': 'Дж. К. Роулинг',
  'year': '1999',
  'color': 'синяя'
  },
  
  {
    'name': 'Гарри Поттер и Кубок Огня',
  'author': 'Дж. К. Роулинг',
  'year': '2000',
  'color': 'желтая'
}]


const books = [ ...allBooks, ...garryPotterMultiverse];

//10. Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей с задания №9. 
const isRareBook = (rareBooks) => {
  return rareBooks.map(book => ({
         ...book, 
         isRare: Number(book.year) > 1997
        }));
};

console.log(isRareBook(books));