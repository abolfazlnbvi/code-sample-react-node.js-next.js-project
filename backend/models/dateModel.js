const mongoose = require("mongoose");

const dateSchema = new mongoose.Schema({
    user: {
        type: Number,
        required: false,
        default: 0
    },
    test: {
        type: Number,
        required: false,
        default: 0
    },
    buy: {
        type: Number,
        required: false,
        default: 0
    },
    request: {
        type: Number,
        required: false,
        default: 0
    },
    blog: {
        type: Number,
        required: false,
        default: 0
    },
    main: {
        type: Number,
        required: false,
        default: 0
    },
    class: {
        type: Number,
        required: false,
        default: 0

    },
    products: {
        type: Number,
        required: false,
        default: 0
    },
    dashboard: {
        type: Number,
        required: false,
        default: 0
    },
    dateFa: {
        type: String,
        required: false,
        default: 0
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
});

module.exports = mongoose.model("DateSchema", dateSchema);
