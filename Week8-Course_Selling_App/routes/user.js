const { Router } = require("express");
const userRouter = Router();


userRouter.post("/signup",function(Req,res){

});

userRouter.post("/signin",function(req,res){

});

userRouter.get("/purchases", function(req,res){

});

module.exports = {
    userRouter :  userRouter
} 