/* 
const number = +prompt("Введите число");
if (number % 2 == 0) {
  console.log("Чётное число")
} else if (number % 2 !== 0) {
  console.log("Нечётное число")
}
*/



const age = +prompt("Введите Ваш возраст");
/*const discount = age < 18 ? 10 : 0 || age >= 18 && age <= 65 ? 20 : 0 || age > 65 ? 30 : 0;
console.log(discount) */

switch (true) {
  case (age < 18) :
    console.log("Скидка на доставку 10%");
    break;
  case (age >= 18 && age <= 65) :
    console.log("Скидка на доставку 20%");
    break;
  case (age > 65) :
    console.log("Скидка на доставку 30%");
    break;
}




/*const username = ['admin', 'user'];
const password = "123456"
const role = prompt("Введите имя")
const key = prompt("Введите пароль")
if (username.includes(role) && key == password) {
  console.log("Доступ разрешен") 
  } else {
  console.log ("Доступ запрещен")
} */





/*
const type = ['Стандарт', 'Экспресс', 'Премиум'];
const weight = +prompt("Введите вес в килограммах");
const delivery = prompt("Укажите тип доставки:\n 1. Стандарт\n 2. Экспресс\n 3. Премиум");

switch (true) {
  case (weight <= 0) :
    alert("Некорректный вес посылки");
    break;
  case (!type.includes(delivery)):
    alert("Неверный тип доставки");
    break;
}

let baseSum
if (weight < 1) {
  baseSum = 5
} else if ( weight => 1 && weight <=5) {
  baseSum = 10
} else {
  baseSum = 15
}

let coefficient
if (delivery === 'Стандарт') {
  coefficient = 1
} else if (delivery === 'Экспресс') {
  coefficient = 1.5
} else if (delivery === 'Премиум') {
  coefficient = 2
}

let sum = baseSum * coefficient;
alert(`Итоговая стоимость доставки: ${sum}$`);
*/