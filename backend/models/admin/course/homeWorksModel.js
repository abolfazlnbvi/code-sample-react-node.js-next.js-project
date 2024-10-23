const mongoose = require("mongoose");

const homeWorksSchema = new mongoose.Schema({
    masterId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    courseId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    homeWork: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    isEnd: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('HomeWorksSchema', homeWorksSchema);