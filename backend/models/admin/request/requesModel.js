const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    requestId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    request: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true,
        default: 0
    },
    categories: {
        type: String,
        required: true
    },
    place: {
        type: Array,
        required: true
    },
    adminText: {
        type: String,
    },
    admin: {

        type: mongoose.Schema.ObjectId,

    },
    isActive: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('RequestSchema', requestSchema);