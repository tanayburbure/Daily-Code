const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "mnbvcxzasdfghjklpo"

userRouter.post("/signup", async function (req, res) {
    const { email, password, firstName, lastName } = req.body;

    try {
        await userModel.create({
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
});

userRouter.post("/signin", async function (req, res) {

    const { email, password } = req.body;
    const user = await userModel.find({
        email: email,
        password: password
    })
    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        res.json({
            token: token
        })
    }
    else {
        res.status(403).json({
            message: "Invalid Credentials.....!"
        })
    }
});

userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "Purchases Endpoint"
    })
});

module.exports = {
    userRouter: userRouter
} 