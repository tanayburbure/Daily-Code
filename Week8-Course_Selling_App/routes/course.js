const { Router } = require("express")
const courseRouter = Router();


courseRouter.post("/purchase", function(Req,res){
    res.json({
        message : "purchase Endpoint"
    })
});

courseRouter.get("/preview", function(req,res){
    res.json({
        message : "Preview Endpoint"
    })
});


module.exports = {
    courseRouter : courseRouter
}