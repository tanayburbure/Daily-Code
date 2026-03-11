// function Sum(a: number , b: number) : number {
//     return a + b
// }
// console.log(Sum(5,9))

import ts = require("typescript");

// function isEven ( num : number) : boolean {
//     if(num % 2 == 0){
//         return true
//     }else {
//         return false
//     }
// }
// console.log(isEven(5))

//  Interfaces

interface Address {
  street : string ;
  city : string ;
  pincode : number ;
  houseNo : number
  
}

interface User {
  name: string;
  age: number;
  // address?: {  //Add ? (Question Mark) for optional use
  //   street?: string;
  //   city: string;
  //   pincode: number;
  // };
  address : Address
}

let user: User = {
  name: "Hrishikesh Sinha",
  age: 25,
  address: {
    street: "Govinda nagar",
    city: "hydrabad",
    pincode: 442515,
    houseNo : 33
  },
};


function isLegalAge(user : User) : boolean {
  if (user.age >= 18){
    return true 
  }else {
    return false
  }
}

const ans = isLegalAge(user)

if (ans){
  console.log("The Person has Legal age")
}else{
  console.log("The Person Don't Have a legal Age")
}

interface people {
  name : string ;
  age : number ;
  // greet : () => string
}

// let People : people = {
//   name : "Harkirat" ,
//   age : 24 ,
//   greet : ()=> {
//     return "Hi There Dumbo"
//   }
// }

// const greet = People.greet()
// console.log(greet)

class Manager implements people {
  name : string ;
  age : number ;

  constructor(name : string , age : number) {
    this.name = name ;
    this.age = age
  }
}

let newUser = new Manager ("John", 25)
console.log(newUser)

class Shape {
  area() {
    console.log("Hi i am the area")
  }
}

class Rectangle extends Shape{
  width : number ;
  height : number ;
  constructor(){
    super();
    this.width = 2 ;
    this.height = 3
  } 
}