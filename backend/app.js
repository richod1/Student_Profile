const express=require('express')
const cors=require('cors')
const BodyParser=require('body-parser')
const mongoose=require('mongoose')
const app=express();
const port=3000;
require('dotenv').config()
const database=require('./database/db')
const UserRouter=require('./routes/authRoute')

app.use(cors())
app.use(express.json())
app.use(BodyParser.urlencoded({extended:true}))

database.connect();

app.get('/api',(req,res)=>{
    res.send('api is on')
})


//error endpoint
app.all('*',(req,res,next)=>{
    next()
})


app.use('/user',UserRouter)

app.listen(port,(err)=>{
    if(err) throw new Error("server asleep")
    console.log(`server is running on port ${port}`)
})