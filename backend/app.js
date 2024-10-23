const path = require("path");

const cron = require('node-cron');
const fs = require('fs');
const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");


const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/error");
const { setHeaders } = require("./middlewares/header");
const cors = require('cors');
var bodyParser = require('body-parser');
const DateSchema = require("./models/dateModel");
const TestSchema = require("./models/admin/test/testModel");
const moment = require("jalali-moment");

dotenv.config();

//* Database connection
connectDB();
//* App

const app = express();


//* BodyPaser

const corsOptions = {
  origin: 'https://amoozkaar.ir/',//(https://your-client-app.com)
  optionsSuccessStatus: 200,
};

app.use(cors());

app.use(setHeaders);
app.use(express.json());
app.use(cookieParser());


//* File Upload Middleware

//* Static Folder
app.use(express.static(path.join(__dirname, "public")));
//* Routes
//* -------user
app.use("/users", require("./routes/user/userRoute"));
app.use("/blog", require("./routes/user/blogRoute"));
app.use("/ads", require("./routes/user/adsRoutes"));
app.use("/test", require("./routes/user/testResRoute"));
app.use("/blog", require("./routes/user/blogRoute"));
app.use("/class", require("./routes/user/classRoutes"));
app.use("/buy", require("./routes/user/buyRouter"));
app.use("/request", require("./routes/user/requestRouters"));




// تنظیم زمان‌بندی برای هر روز در ساعت 18:10
cron.schedule('44 12 * * *', async () => {
   await DateSchema.create({
    dateFa: moment(Date.now()).locale('fa').format("YYYY-MM-DD")
   })

      const result = await TestSchema.updateMany(
        { endDate: { $lt: moment(Date.now()).locale('fa').format("YYYY/MM/DD") }, isActive: true },
        { $set: { isActive: false } }
      );
      console.log(`${result.nModified} documents updated.`);
    

  
});

console.log('Cron job scheduled to run every day at 00:00.');


//* -------admin
app.use("/admin/handleads", require("./routes/admin/adsRoutes"));
app.use("/admin/test", require("./routes/admin/testMakerRoute"));
app.use("/admin/blog", require("./routes/admin/blogRoute"));
app.use("/admin/upload", require("./routes/admin/uploadRoutes"));
app.use("/admin/users", require("./routes/admin/usersRoutes"));
app.use("/admin/class", require("./routes/admin/classRoutes"));
app.use("/admin/category", require("./routes/admin/categoryRoutes"));
app.use("/admin/request", require("./routes/admin/requestRouters"));


// const currentDate = new Date();
// console.log(`تاریخ فعلی: ${currentDate.toISOString().split('T')[0]}`);

// for (let i = 0; i < 30; i++) {
//   const nextDate = new Date(currentDate);
//   nextDate.setDate(currentDate.getDate() + i);
//   console.log(`روز ${i + 1}: ${nextDate.toISOString().split('T')[0]}`);
// }
//* Error Controller
app.use(errorHandler);

//create server
const PORT = process.env.PORT || 8443;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);


/*



*/