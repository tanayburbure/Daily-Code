//code for cors - Cross Origin Resourse Sharing

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors())

app.post("/sum",function(req,res,next){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer:a+b
    })
})

app.listen(3000)