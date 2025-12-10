// const express = require("express");
// const app = express();
// const jwt = require("jsonwebtoken")
// const JWT_SECRET = "ggghajhahhhshsahjkasjkn"

// app.use(express.json());


// const users = [];

// // Normal way to generate token and authenticate user

// // function generateToken() {
// //     const options = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// //     let token = "";
// //     for (let i = 0; i < 32; i++) {
// //         token += options[Math.floor(Math.random() * options.length)];
// //     }
// //     return token;
// // }


// //JWT - JSON Web Token it is type of encoding


// // ---------------------- SIGNUP ----------------------

// app.post("/signup", function(req, res) {

//     const username = req.body?.username;
//     const password = req.body?.password;


//     if(users.find(u => u.username === username)){
//         res.json({
//             message:"This user already Exist !"
//         })
//         return
//     }

//     users.push({
//         username: username,
//         password: password
//     });

//     res.json({
//         message: "Hey! You are signed up."
//     });
//     console.log(users)
// });

// // ---------------------- SIGNIN ----------------------
// app.post("/signin", function(req, res) {

   
//     const username = req.body?.username;
//     const password = req.body?.password;

   
//     // const user = users.find(function(u){
//     //     if (u.username == username && u.password == password){
//     //         return true
//     //     }
//     //     else{
//     //         return false
//     //     }
//     // }) 


//     let foundUser = null;
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].username === username && users[i].password === password) {
//             foundUser = users[i];
//             break;
//         }
//     }

//     if (foundUser) {
//         // const token = generateToken();
//         // foundUser.token = token;
//         const token = jwt.sign({
//             username:username,
//         },JWT_SECRET)

//         res.json({
//             // message: token  //for normal authentication
//             token:token
//         });

//     } else {
//         res.status(403).json({
//             message: "Invalid username or password!"
//         });
//     }
//     console.log(users)
// });

// app.get("/me",function(req,res){
//     const token = req.headers.token; 
//     const decodedInformation = jwt.verify(token ,JWT_SECRET); // {username : e.g. "hshsshhsb"}
//     const username = decodedInformation.username;


//     let foundUser = null;

//     // for (let i = 0 ; i < users[i] ; i++){
//     //     // if ( users[i].token == token){ //for the normal authentication
//     //     if ( users[i].username == token){ //for jwt authentication we can search via username
//     //         foundUser = users[i]
//     //     }
//     // }
    
//     // let foundUser = null; we do not require to store token while using jwt 


//     for (let i = 0; i < users.length ; i++){
//         if (users[i].username == username ){
//             foundUser = users[i]
//         }
//     }
//     if (foundUser){
//         res.json({
//             username : foundUser.username,
//             password : foundUser.password
//         })
//     }
//     else {
//         res.json({
//             message : "Token is invalid ...⚠️"
//         })
//     }
// })

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });


const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const JWT_SECRET = "tryeryeuwuwiwqo";
app.use(express.json())

function logger(req,res,next){
    console.log(req.method + "Request came");
    next();
}

const users = []

app.get("/",function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup",logger,function(req,res){
    const username = req.body?.username;
    const password = req.body?.password;

    if (users.find( u => u.username === username)){
        res.json({
            message :"This user already exist"
        })
    }
    users.push({
        username:username,
        password:password
    })
    res.json({
        message:"Hey ! you are Signed Up"
    })
    console.log(users)
})

app.post("/signin",logger,function(req,res){
    const username = req.body?.username;
    const password = req.body?.password;

    let foundUser = null ;
    for (let i = 0; i<users.length ; i++){
        if (users[i].username === username && users[i].password === password){
            foundUser = users[i];
            break;
        }
    }
    if(foundUser){
        const token = jwt.sign({
            username : username ,
        },JWT_SECRET)

        res.header("jwt",token);
        res.header("random","harkirat");

        res.json({
            token:token
        })

    }
    else{
        res.status(403).json({
            message:"Invalid username or passoword !"
        })
    }
    console.log(users)

});

function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData.username){
        req.username = decodedData.username;
        next()
    }
    else{
        res.json({
            message:"You are not logged in !...."
        })
    }
}

app.get("/me",auth,logger,function(req,res){
    let foundUser = null;
    for (let i = 0; i < users.length ; i++){
        if (users[i].username === req.username ){
            foundUser = users[i]
        }
    }
    if(foundUser){
        res.json({
            username : foundUser.username,
            password : foundUser.password
        })
    }
})

app.listen(3000)