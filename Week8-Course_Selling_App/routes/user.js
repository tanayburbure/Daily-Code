const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");
const jwt = require("jsonwebtoken")

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
        return res.status(400).json({
        message: "User already exists"
    });
    }
    res.json({
        message: "Signup Endpoint"
    })
});

userRouter.post("/signin", async function (req, res) {

    const { email, password } = req.body;
    const user = await userModel.findOne({
        email: email,
        password: password
    })
    if (user) {
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_USER_SECRET);
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

module.exports = {
    userRouter: userRouter
} 