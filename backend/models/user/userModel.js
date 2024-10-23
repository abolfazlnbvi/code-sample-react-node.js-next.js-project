const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: false
    },
    phone: {
        type: Number,
        required: true
    },
    
    email: {
        type: String,
        required: false
    },
    sex: {
        type: String,
        required: false
    },
    age: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("UserSchema", userSchema);
