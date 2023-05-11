const express = require("express")

const app = express()

const port = 5000

var users = [
    {name : "Alaya",age : 27, id : 1},
    {name : "Islem",age : 29, id : 2},
    {name : "Mahmoud",age : 29, id : 3},
]

app.use(express.json())

// Read
app.get('/getUsers',(req,res)=>{
    res.send({Msg : "List of users :",users})
})
//Create
app.post("/addUser",(req,res)=>{
    users = [...users,req.body]
    res.send({Msg :"User added",users})
})
//Delete
app.delete('/deleteUser/:id',(req,res)=>{
    const {id} = req.params

    users = users.filter(el=> el.id != id)

    res.send({Msg :"User deleted",users})
})
//Update
app.put('/updateUser/:id',(req,res)=>{
    const {id} = req.params

    users = users.map(el=> el.id == id ? {...el,...req.body} : el)

    res.send({Msg :"User updated",users})
})

app.listen(port,console.log("Server is running"))