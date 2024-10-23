const mongoose = require("mongoose");

const filesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    fieldname: {
        type: String,
        required: true
    },
    originalname: {
        type: String,
        required: false
    },
    encoding: {
        type: String,
        required: false
    },
    mimetype: {
        type: String,
        required: false
    },
    destination: {
        type: String,
        required: false
    },
    filename: {
        type: String,
        required: false
    },
    path: {
        type: String,
        required: false
    },
    size: {
        type: Number,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    createAt: {
        type: String,
        required: false,
        default: Date.now()


    },
});

module.exports = mongoose.model("FilesSchema", filesSchema);
