const mongoose = require("mongoose");

const adsSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('AdsModel', adsSchema);