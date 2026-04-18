import { userComments } from "./comments.js";

//2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const showNumber = numbers.filter(number => number >= 5)

console.log(showNumber)

//3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const heroes = [
  'Axe',
  'Juggernaut',
  'Tinker',
  'Primal Beast',
  'Beastmaster',
  'Luna',
];

console.log(heroes)

//4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

//(2)Массив
const allNumbers = numbers.reverse()

console.log(allNumbers)

//(3)Массив
const allHeroes = heroes.reverse()

console.log(allHeroes)

//7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const filteredNumbers = userComments.filter(comment => comment.email.includes('.com'))

console.log(filteredNumbers)

///8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const updatedComments = userComments.map(users => ({
  ...users,
  user: users.id <= 5 ? 'postId: 2' : 'postId: 1'
}));

console.log(updatedComments);

//9. Перебрать массив, что бы объекты состояли только из айди и имени

const userName = userComments.map(users => ({ 
  id: users.id, 
  name: users.name
}));

console.log(userName);

//10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.


const validateComments = userComments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log(validateComments);

//11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

//12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.


const mailsByReduce = userComments.reduce(( box,comment ) => {
  box.push(comment.email)
  return box;
}, []).toString();

console.log(mailsByReduce);

const allMails = userComments.map(comment => comment.email);

console.log(allMails);