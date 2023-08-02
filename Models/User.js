const mongoose = require('mongoose');


// Schema
const Userschema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
});




module.exports = User = mongoose.model ("user" , Userschema);