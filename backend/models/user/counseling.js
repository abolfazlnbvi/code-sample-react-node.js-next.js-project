const mongoose = require("mongoose");

const counselingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    masterId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    },
    counselingTime: {
        type: Date,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("CounselingSchema", counselingSchema);