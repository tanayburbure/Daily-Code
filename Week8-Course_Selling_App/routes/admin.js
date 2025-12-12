const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db.js");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_SECRET = require("../config.js")

adminRouter.post("/signup" ,async function(req,res){
    const { email, password, firstName, lastName } = req.body;
        try {
            await adminModel.create({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            })
        }
        catch (e) {
    
        }
        res.json({
            message: "Signup Endpoint"
        })
})

adminRouter.post("/signin",async function(req,res){
    const { email, password } = req.body;
        const admin = await adminModel.findOne({
            email: email, 
            password: password
        })
        if (admin) {
            const token = jwt.sign({
                id: admin._id
            }, JWT_ADMIN_SECRET);
            res.json({
                token: token
            })
        }
        else {
            res.status(403).json({
                message: "Invalid Credentials.....!"
            })
        }
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

adminRouter.get("/course/bulk" , function(req,res){
    res.json({
        message : "This get endpoint"
    })
})

module.exports = {
    adminRouter : adminRouter
}