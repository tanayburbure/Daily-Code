// const express = require("express");
// const app = express();

// app.get("/add/:firstArg/:secondArg", function(req,res){
//     const a = parseInt(req.params.firstArg);
//     const b = parseInt(req.params.secondArg);
//     res.json({
//         answer:a+b
//     })
// })
// app.get("/subtract/:firstArg/:secondArg", function(req,res){
//     const a = parseInt(req.params.firstArg);
//     const b = parseInt(req.params.secondArg);
//     res.json({
//         answer:a-b
//     })
// })
// app.get("/multiply/:firstArg/:secondArg", function(req,res){
//     const a = parseInt(req.params.firstArg);
//     const b = parseInt(req.params.secondArg);
//     res.json({
//         answer:a*b
//     })
// })
// app.get("/divide/:firstArg/:secondArg", function(req,res){
//     const a = parseInt(req.params.firstArg);
//     const b = parseInt(req.params.secondArg);
//     res.json({
//         answer:a/b
//     })
// })
// app.listen(3000)

//                   middleware

// const express = require("express");
// const app = express()

// let requestCount = 0;

// // middleware handler function i.e. actual middleware
// function requestIncreaser(req,res,next){
//     requestCount = requestCount + 1;
//     console.log("Total no of requests =" + requestCount);
//     next();
// }

// function realSumHandler(req,res){
//     //main logic
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);
//     res.json({
//         ans:a+b
//     })
// }

// //better routing,add database,add middlewares
// app.get("/sum/:a/:b",requestIncreaser,realSumHandler);
// //  or

// app.use(requestIncreaser) // this is the way use middleware as centralized way dont need to call it every time works at every get endpoint below it....

// app.get("/sum/:a/:b",realSumHandler);
// app.get("/sub/:a/:b",realSumHandler);
// app.get("/divide/:a/:b",realSumHandler);
// app.get("/multi/:a/:b",realSumHandler);


// app.listen(3000)

// // http://localhost:3000/sum/30/55




const express = require("express");
const app = express();

function loggerMiddleware(req,res,next){
    console.log("Method is " + req.method);
    console.log("Host is " + req.hostname);
    console.log("Route is " + req.url);
    console.log(new Date());
    next();
}

app.use(loggerMiddleware)

app.get("/sum/:a/:b",function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b)

    res.json({
        ans:a+b
    })
})

app.get("multiply/:a/:b",function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b)

    res.json({
        ans:a*b
    })
})

app.listen(3000)