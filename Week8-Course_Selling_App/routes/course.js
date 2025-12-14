const { Router } = require("express")
const courseRouter = Router();
const { userMiddleware } = require("../middleware/user")
const { purchaseModel , courseModel } = require("../db")

courseRouter.post("/purchase",userMiddleware, async function(req,res){
    const userId = req.body.userId;
    const courseId = req.body.courseId; 
    await purchaseModel.create({
        userId ,
        courseId
    })
    res.json({
        message : "you have succesfully bought the course"
    })
});

courseRouter.get("/preview",async function(req,res){
    const courses = await courseModel.find({});

    res.json({
        courses
    })
});

courseRouter.get("/purchases",userMiddleware , async function(req,res){
    const userId = req.userId;
    const purchases = await purchaseModel.find({
        userId
    })
    res.json({
        purchases
    })
})

module.exports = {
    courseRouter : courseRouter
}