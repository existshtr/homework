const user = {
  name: "Alex",
  age: 15,
  city: "Moscow",
  characteristics: {
    height: 175,
    weight: 60,
  },

  };
console.log(user);



function isEmpty(object) {
  for (let key in object){
    return false;
  }
    return true;
  }
  console.log(isEmpty("watch"));




const user = {
  name: "Alex",
  method: "full",
  age: 15,
  city: "Moscow",
  characteristics: {
    height: 175,
    weight: 60,
  },
  callAllMethods(user) {
    if ("method" in user) {
      console.log(`${user.method}`);
    } else {
      console.log("Не найдено");
    }
  },
};

user.callAllMethods(user);
