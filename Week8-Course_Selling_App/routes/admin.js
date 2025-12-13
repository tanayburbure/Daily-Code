const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db.js");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_SECRET = require("../config.js")
const { adminMiddleware } = require("../middleware/admin")

adminRouter.post("/signup", async function (req, res) {
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

adminRouter.post("/signin", async function (req, res) {
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

adminRouter.post("/course", adminMiddleware, async function (req, res) {
    const adminId = req.userId;
    const { title, description, imageUrl, price } = req.body;
    const course = await courseModel.create({
        title, description, imageUrl, price, creatorId: adminId
    })

    res.json({
        message: "course created",
        courseId: course._id
    })
})

adminRouter.put("/course", adminMiddleware , async function (req, res) {
    const adminId = req.userId;
    const { title, description, imageUrl, price ,courseId} = req.body;



    const course = await courseModel.updateOne({
        _id : courseId,
        creatorId : adminId
    }
        ,{
        title, description, imageUrl, price
    })

    res.json({
        message: "course updated",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk",adminMiddleware ,async function (req, res) {
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId : adminId
    })
    res.json({
        message: "This are all your courses",
        courses
    })
})

module.exports = {
    adminRouter: adminRouter
}