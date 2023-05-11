const express = require("express")

const app = express()

const port = 5000

// const Middleware=(req,res,next)=>{
//     console.log('Alaya')
//     next()
// }

// app.get("/test",Middleware,(req,res)=>{
//     res.send('Alaya')
// })

// app.use(Middleware)

app.get("/test",(req,res)=>{
    res.send('Alaya')
})

app.get("/alaya",(req,res)=>{
    res.send('<h1>Mahmoud</h1>')
})

// app.get("/kouti",(req,res)=>{
//     // console.log(__dirname)
//     res.sendFile(__dirname+"/Public/Home.html")
// })

// app.get('/style.css',(req,res)=>{

//     res.sendFile(__dirname+"/Public/style.css")
// })

// app.get('/imen',(req,res)=>{
//     res.sendFile(__dirname+"/Public/")
// })

app.use(express.static('Public'))




app.listen(port,console.log("Server is running"))