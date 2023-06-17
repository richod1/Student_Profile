const mongoose=require('mongoose')


const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    programme:{
        type:String,
        enum:['HND','BTECH','DIPLOMA','PDIPLOMA'],
        required:true,
    },
     course:{
        type:String,
        enum:['ICT','ELEC','MEHC','TORIS','HOSP','CIVIL','BUS'],
        required:true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
      },
    password:{
        type:String,
        required:true,
    
    },
    phone:{
        type:String,
        maxLength:10,
        minLength:9,
    },
},{
    timestamps:true,
})

module.exports=mongoose.model('User',UserSchema)