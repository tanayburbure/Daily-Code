//Record and Maps...........


//Records..

type Users = Record<string , {name : string  , age : number}>

const users:Users = {
    "helpa@12" : {name : "Tanay" , age : 22},
    "yoush@12" : {name : "Harkirat" , age : 32}
}

//Maps... // This is an Javascript Concept

// const Persons = new Map() ; 
type person = {
    name : string ;
    age : number ;
    email: string
}
const Persons = new Map<string , person>()

Persons.set("ahshk@12", {name :"Tanay" , age : 22 , email:"hahah@haka.com"})
Persons.set("retet@13" , {name : "Harki" , age : 32 , email : "harkihhdhh@nan.com"})
// Persons.set("retedst@13" , {name : "Hadss" , email : "harkihhdhh@nan.com"}) // this will give error

const Person = Persons.get("ahshk@12");
console.log(Person);

