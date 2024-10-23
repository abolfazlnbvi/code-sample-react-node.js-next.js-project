const mongoose = require("mongoose");

const buySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    serviceId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    paymentId: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("BuySchema", buySchema);