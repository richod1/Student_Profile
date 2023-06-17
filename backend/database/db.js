const mongoose=require('mongoose')
require("dotenv").config()

const dbConnection=()=>{
  try{
    mongoose.set('strictQuery',true)
    mongoose.connect(process.env.MONGO_DB).then(()=>{
        console.log("Db connected success")
    })
  }catch(err){
    console.log("DATABASE NOT CONNECTED!!")
  }
}

module.exports=dbConnection;