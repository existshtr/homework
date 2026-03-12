const firstName = "Daniil";
const lastName = "Missarov";
const isStudent = true;

let age = 26;
let currentYear = 2026;
let birthYear = currentYear - age;
console.log(birthYear);

console.log(
  `Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса: ${isStudent} `,
);

let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean(' ');
let result = a + b + c + d + e;
console.log(result)