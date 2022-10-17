const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    firstName:{type:'string',required:true},
    lastName:{type:'string',require:true},
    email:{
        type:'string',
        required:true,
        lowercase:true,
        validate:(value)=>{
                return validator.isEmail(value)
        }
    },
    password:{type:'string',required:true},
    role:{type:'string',default:'user'},
    createdAt:{type:Date,default:Date.now()}
})

const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    imageUrl:{type:String,default:null}
})

const orderSchema = new mongoose.Schema({
    orderItems:{type:Array,default:[]},
    userId:{type:String,required:true},
    deliveryAddress:{type:String,required:true},
    orderAmount:{type:Number,required:true},
    contact:{type:String,required:true},
    status:{type:String,default:"Ordered"},
    orderedAt:{type:Date,default:Date.now()}
})

let usersModel = mongoose.model('users',userSchema);
let foodModel = mongoose.model('foods',foodSchema);
let orderModel = mongoose.model('orders',orderSchema);

module.exports={mongoose,usersModel,foodModel,orderModel}