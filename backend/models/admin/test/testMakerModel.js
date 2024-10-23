const mongoose = require("mongoose");
const testsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageId: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    seoTitle: {
        type: String,
        required: true
    },
    seoCaption: {
        type: String,
        required: true
    },
    Categories: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isShowcass: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("TestsSchema", testsSchema);
