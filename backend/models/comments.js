const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
    idUrl: {
        type: String,
        required: false
    },
    comments: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: false
    },
    replayId:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model("CommentsSchema", commentsSchema);
