function calculateFinalPrice(sum, percent, nalog) {
  percent = percent / 100;
  sum = sum - (sum * percent);
  nalog = sum * nalog;
  const result = sum + nalog;
  console.log(result)
}
calculateFinalPrice(100, 10, 0.2);
calculateFinalPrice(100, 10, 0);


function checkAccess(userName, password){
  if (userName === "admin" && password === Number(123456)) {
    console.log("Доступ разрешен")
} else {
    console.log("Доступ запрещен")
}
}
checkAccess("admin", 123456);


function getTimeOfDay(time) {
  if (time >= 0 && time <= 5) {
    console.log("Ночь")
  } else if (time >= 6 && time <= 11) {
    console.log("Утро")
  } else if (time >= 12 && time <= 17) {
    console.log("День")
  } else if (time >= 18 && time <= 23) {
    console.log("Вечер")
  } else {
    console.log("Некорректное время")
  }
}
  getTimeOfDay(7);


function findFirstEven(start, end) {
  for (let num = start;  num <= end; num++) {
  if (num % 2 === 0) {
    return num;
} 
}
  return("Нечётных чисел нет")
}
console.log(findFirstEven(5, 7));