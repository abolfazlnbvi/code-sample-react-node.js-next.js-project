const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log(`DB connected! on ${process.env.MONGO_URL}`))
    .catch((error) => console.log(`this is a ${error}`));
};

module.exports = connectDB;
