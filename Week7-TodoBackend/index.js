const bcrypt = require("bcrypt")
const express = require("express");
const { UserModel, TodoModel } = require("./db.js");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { auth, JWT_SECRET } = require("./auth.js");
const { z } = require("zod")

mongoose.connect(
    "mongodb+srv://tanayburbure:%40Iamtanay1@tanayburbure.hpsvfyg.mongodb.net/todo-app-database"
);

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {

    const requiredBody = z.object({
        email : z.string().min(5).max(50).email(),
        name : z.string().min(3).max(50),
        // Assignment to figure out how to validate it has atleast 1 uppercase or 1 lowercase or 1 special charector in zod 
        password: z.string().min(5).max(50)
    })
    const parsedData = requiredBody.safeParse(req.body);
    if(!parsedData.success){
        res.json({
            message : "Incorrect Format...|||",
            error : parsedData.error.flatten().fieldErrors
        })
        return;
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
  
    let errorThrown = false;
    try {
        const hashedPassword = await bcrypt.hash(password, 5);

        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name,
        });
    }
    catch (e) {
        res.json({
            message: "User with this email already exist....⚡"
        })
        errorThrown = true;
    }

    if (!errorThrown) {
        res.json({
            message: "You have signed up !.. !",
        });
    }
});

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    });

    if (!user) {
        return res.status(403).json({
            message: "Incorrect username or password !..."
        })
    };

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        res.status(403).json({
            message: "Incorrect username or password !..."
        })
    };

    const token = jwt.sign({
        id: user._id.toString()
    }, JWT_SECRET);

    res.json({
        token
    });

});

app.post("/todo", auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        title,
        userId,
        done,
    });

    res.json({
        message: "Todo Created..",
    });
});

app.get("/todos", auth, async function (req, res) {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId,
    });
    res.json({
        todos,
    });
});

app.put("/todo/:id/done", auth, async function (req, res) {
    const todoId = req.params.id;

    const updated = await TodoModel.findOneAndUpdate({
        _id: todoId,
        userId: req.userId,
        done: true,
        new: true
    });

    if (!updated) {
        return res.status(404).json({
            message: "Todo not found ..."
        })
    };

    res.json({
        message: "Todo marked as Done ...",
        todo: updated
    });
})



app.listen(3000);
