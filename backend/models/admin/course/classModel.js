const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    master: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    time: {
        type: Array,
        required: true
    },
    week: {
        type: Array,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
      default: false
    },
    isShowcass: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ClassModel', classSchema);