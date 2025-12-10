// function counter(){
//     var count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// var sent = counter();
// sent();
// sent();
// sent();

// var sent2 = counter();
// sent2();
// sent2();

// function Counter(){
//     var count = 0;
//     this.increment = function(){
//         count++;
//         console.log(count)
//     }
//     this.decrement = function(){
//         count--;
//         console.log(count)
//     }
// }

// // This is the constructor function so we use new at the start of the function name

// var sent = new Counter;
// sent.decrement()
// sent.decrement()
// sent.decrement()
// sent.decrement()
// sent.decrement()
// sent.decrement()
// sent.increment()
// sent.increment()
// sent.increment()

// function sum(a,b){
//     return console.log(a + b);
// }
// sum(2,5)
// sum(4,"ahhsdhkjsahbf")

// function sum(n){
//     return n*(n+1)
// }
// let ans = sum(50)
// console.log(ans)


// function canVote(age) {
//   if ((age) => 18) {
//     return console.log("You can vote");
//   } else {
//     console.log("you can't vote");
//   }
// }
// canVote(18);

// const vote = (age) => {
//   if ((age) => 18) return console.log("You can vote ");
//   else return console.log("You can't vote")
// }
// vote(17);

// function checkevenodd(num){
//     if (num % 2 ===0 ){
//         return console.log("The Number is even")
//     }
//     else return console.log("The number is odd")
// }
// checkevenodd(40)
// checkevenodd(5)


// function sum(n){
//     total = 0
//     for (let i=0;i<=n;i++){
//         total+=i
//     }
//     return console.log(total)
// }
// sum(30)

// function greetandvote(user){
//     const titles = { male : "Mr" , female :"Mrs"}
//     const title = titles[user.gender.toLowerCase()] || "Others"

//     console.log(`Hii ${title} ${user.name},your age is ${user.age}`)
//     console.log(user.age>=18 ? "You are legal to vote" : "You are not legal to vote")
// }

// const newuser = { name: "Tanay Burbure",age:21,gender:"male"};
// greetandvote(newuser)


// function greetandvote(user){
//     const titles ={ male:"Mr" , female :"Mrs"}
//     const title = titles[user.gender.toLowerCase()] || "Others"

//     console.log(`Hellooooooooooooo ${user.gender} ${user.name} , Your age is ${user.age}`)
//     console.log( user.age>=18? "You can vote" : "You can't vote")
// }

// const newuser={name:"Tanay Burbure", age : 21 , gender : "male "}
// greetandvote(newuser)

// function filterevenNumber(numbers){
//     return console.log(numbers.filter(num => num % 2 === 0));
// }

// const arr = [3,4,4,42,2,4,2,3,,5,23];
// const evens = filterevenNumber(arr)


// function filterevennumbers(number){
//     return console.log(number.filter(num => num%2 === 0))
// }
// const arr=[121,2,44,32,4231,3,43,121,44,56]
// const evens = filterevennumbers(arr)


//         Asynchronussssssssss JS

// normal code 

// function sum(a,b){
//     return a + b;
// }
// let ans = sum(40,49);
// console.log(ans);


// function addition(n){
//     let ans = 0;
//     for(i=1;i<=n;i++){
//         ans = ans + i;
//     }
//     return ans
// }
// console.log(addition(20))

// const fs = require("fs")
// const content = fs.readFileSync("a.txt","utf-8")
// console.log(content)


// let ans = 0 
// for (i=0;i<100000;i++){
//     ans = ans+i
// }
// console.log(ans)


// const fs = require("fs")
// function afterreadfile(err,content){
//     console.log(content)
// }
// const content = fs.readFileSync("a.txt","utf-8",afterreadfile)
// console.log(content)

// class rectangle {
//     constructor(width,height,color){
//         this.width = width;
//         this.height= height;
//         this.color = color;
//     }
//     area(){
//         const area = this.width*this.height;
//         return area
//     }
//     paint(){
//         console.log(`painting with the color ${this.color}`)
//     }
// }

// const rect = new rectangle(5,10,'red')
// console.log(rect.area())
// rect.paint()


// class circle{
//     constructor(radius,color){
//         this.radius = radius;
//         this.color = color;
//     }
//     area(){
//         const area = 2 * this.radius * Math.PI
//         return area 
//     }
//     paint(){
//         console.log(`The color of the rectangle is ${this.color}`)
//     }
// }

// const cir = new circle(20,"red")
// console.log(cir.area());
// cir.paint()


// class Shape{
//     constructor(color){
//         this.color = color ;
//     }
//     paint(){
//         console.log(`The color of the painting is ${this.color}`)
//     }
//     area(){
//         throw new Error("The area of the shape must be included in subsystem");
//     }
//     getdiscription(){
//         return ` A shape with color ${this.color}`
//     }
// }

// class rectangle extends Shape{
//     constructor(width,height,color){
//         this.width = width;
//         this.height = height;
//         super(color);
//     }
//     area(){
//         return this.width * this.height
//     }
//     getdiscription(){
//         return`The rectangle with width of ${this.width}, and height of ${this.height}, and it's color is ${this.color}`
//     }
// }

// const rect = new Shape(20,20,"red")
// console.log(rect.area())


// const now = new Date()
// console.log(now.toLocaleTimeString())

//  const map = new Map()
//  map.set("name","allice");
//  map.set("age",20);
//  console.log(map.get("name"))
//  console.log(map.get("age"))


// function settimeoutpromisified(ms){
//     return new Promise(resolve => setTimeout(resolve,ms)); 
// }
// function callback(){
//     console.log("3 seconds have passed")
// }
// setTimeout(callback,3000)

// callback hell

// setTimeout(function(){
//     console.log("Hi");
//     setTimeout(function(){
//         console.log("Hello");
//         setTimeout(function(){
//             console.log("Hi There")
//         },5000)
//     },3000)
// },1000)


// Promisefied versions 

// function settimeoutpromisified(ms){
//     return new Promise((resolve) => setTimeout(resolve,ms))
// }

// settimeoutpromisified(1000)
//  .then(function(){
//     console.log("Hi");
//     return settimeoutpromisified(3000)
//  })
//  .then(function(){
//     console.log("Hello")
//     return settimeoutpromisified(5000)
//  })
//  .then(function(){
//     console.log("Hi There")
//  })


// function settimeoutpromisified(ms){
//     return new Promise( resolve => setTimeout(resolve,ms))
// }

// settimeoutpromisified(1000)
//     .then(function(){
//         console.log("Hi")
//         return settimeoutpromisified(3000)
//     })
//     .then(function(){
//         console.log("Hello");
//         return settimeoutpromisified(5000)
//     })
//     .then (function(){
//         console.log("Hello There")
//     })


// const fs = require("fs")
// function afterdone(err,data){
//     if(err){
//         console.log("error while reading the data")
//     }
//     else{
//         console.log(data)
//     }
// }
// fs.readFile("a.txt","utf-8",afterdone)




// const fs = require("fs")

// function afterdone(err,data){
//     if(err){
//         console.log("Error detected while reading the file")
//     }
//     else{
//         console.log(data)
//     }
// }

// fs.readFile("a.txt","utf-8",afterdone)




// const fs = require("fs")

// function readfilepromisified(filepath){
//     return new Promise(function (resolve,reject){
//         fs.readFile(filepath,"utf-8",function(err,data){
//             if(err){
//                 console.log("The error occured while reading the file")
//             }
//             else{
//                 console.log(data)
//             }
//         })
//     })
// }

// function ondone(data){
//     console.log(data)
// }
// function onerror(err){
//     console.log("Error." + err)
// }

// readfilepromisified("ah.txt").then(ondone).catch(onerror)