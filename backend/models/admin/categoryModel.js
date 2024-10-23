const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    part: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },  
    createdAt: {
        type: Date,
        default: Date.now
    }
});
module.exports= mongoose.model('CategorySchema', categorySchema);