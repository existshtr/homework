const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

function getUserAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
console.log(getUserAverageAge(users));

function getAllAdmins(users) {
  return users.filter(user => user.isAdmin);
}
console.log(getAllAdmins(users));

function first(arr, n) {
  if (n == 0) {
    return [];
  } else if (n == undefined) {
    return arr;
  } else {
    return arr.slice(0, n);
  }
}
console.log(first(users, 2));