const { Router } = require("express")
const adminRouter = Router();

app.post("/signup" , function(req,res){
    res.json({
        message : "This is signup endpoint for admin"
    })
})

app.post("/signin", function(req,res){
    res.json({
        message : "This is signin endpoint for admin"
      })
})

app.post("/course", function(req,res){
    res.json({
        message : "this is course post endpoint"
    })
})

app.put("/course", function(req,res){
    res.json({
        message : "This is put endpoint"
    })
})

app.get("/course" , function(req,res){
    res.json({
        message : "This get endpoint"
    })
})

module.exports = {
    adminRouter : adminRouter
}