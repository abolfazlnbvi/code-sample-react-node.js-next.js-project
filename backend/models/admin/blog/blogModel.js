const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
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
    blog: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    seo: {
        type: String
    },
    read: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isShowcass: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('BlogModel', blogSchema);