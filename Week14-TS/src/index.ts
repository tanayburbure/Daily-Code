// function Greet(firstname : string){
//     return ("hello" + firstname)
// }

// console.log(Greet("Sarthak "))






// Commands to run tsc file first we have to 
// first have to convert into js file using npx tsc -b 
// Then we can run node index.js
// command to create .gitignore file ni .gitignore



let firstname:string = "harkirat"
let age : number = 21

interface Usertype {
    firstname : string ,
    lastname : string,
    age:number
}

function Greet(user : Usertype){

}

let user: Usertype = {
    firstname : "harkirat",
    lastname : "kirat",
    age : 21,
}