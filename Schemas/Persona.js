const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = {
    name:{
        type:String
    } ,
    email:{
        type:String
    } ,
    username:{
        type:String
    } ,
    password:{
        type:String
    } ,
    age:{
        type:Number
    }
};

const Persona = new Schema(config);
module.exports = mongoose.model("Persona", Persona);