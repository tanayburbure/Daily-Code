const express = require("express");
const app = express()

let Users = {
    1:{
        todos : []
    },
    2:{
        todos : []
    }
};

app.get('/',function(req ,res){
    res.send("get the todo tasks from the array ")
})

app.post('/',function(req,res){
    toods.push({
        id,
        title
    })
})
app.delete('/',function(req,res){
    //extract the todo via Id
// Then Delete the tasks from the todos
})
// app.get('/asd',function(req,res){
//     res.send("Response from the asd")
// })

app.listen(3000)