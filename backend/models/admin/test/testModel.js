const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    testID: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    testName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    place: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("TestSchema", testSchema);
