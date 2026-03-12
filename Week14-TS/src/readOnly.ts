// Readonly 

type User = {
    readonly name : string 
    age : number
}

const user:User = {
    name : "John" ,
    age : 25
}

//You can also make Entire Object Readonly
const people: Readonly<User> = {
    name : "Tanay" ,
    age : 22
}


user.age = 26 // If the value is not Readonly it can be reassigned


// user.name = "Tanay"   This will throw and error 

