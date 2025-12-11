const { Router } = require("express")
const adminRouter = Router();
const { adminModel } = require("../db.js")


adminRouter.post("/signup" , function(req,res){
    res.json({
        message : "This is signup endpoint for admin"
    })
})

adminRouter.post("/signin", function(req,res){
    res.json({
        message : "This is signin endpoint for admin"
      })
})

adminRouter.post("/course", function(req,res){
    res.json({
        message : "this is course post endpoint"
    })
})

adminRouter.put("/course", function(req,res){
    res.json({
        message : "This is put endpoint"
    })
})

adminRouter.get("/course" , function(req,res){
    res.json({
        message : "This get endpoint"
    })
})

module.exports = {
    adminRouter : adminRouter
}