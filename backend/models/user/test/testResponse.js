const mongoose = require("mongoose");

const testResSchema = new mongoose.Schema({
    idTest: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    idUser: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    response: {
        type: Array,
        required: true,
        default: []
    },
    balance: {
        type: Number,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("TestResSchema", testResSchema);
