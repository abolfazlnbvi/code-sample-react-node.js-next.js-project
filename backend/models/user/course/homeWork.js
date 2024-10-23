const mongoose = require("mongoose");

const homeWorksSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    masterId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    courseId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    homeWorkFile: {
        type: String,
        required: true
    },
    userText: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false
    },
    isMasterSeen: {
        type: Boolean,
        default: false
    },
    MasterText: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('HomeWorksSchema', homeWorksSchema);