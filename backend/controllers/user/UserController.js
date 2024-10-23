const jwt = require("jsonwebtoken");
const UserSchema = require("../../models/user/userModel");
const DateSchema = require("../../models/dateModel");
const AdsModel = require("../../models/admin/adsModel")
const blogSchema = require("../../models/admin/blog/blogModel");
const categorySchema = require("../../models/admin/categoryModel")
const ClassModel = require("../../models/admin/course/classModel")
const RequestSchema = require("../../models/admin/request/requesModel");
const TestsSchema = require("../../models/admin/test/testMakerModel");
const TestSchema = require("../../models/admin/test/testModel");

const BuySchema = require("../../models/user/buyModel");
const CounselingSchema = require("../../models/user/counseling");

const moment = require("jalali-moment");

exports.login = async (req, res, next) => {

    try {

        const { phone, password } = req.body;
        console.log({ phone, password });


        const user = await UserSchema.findOne({ phone, password });
        console.log(user);
        if (!user) {
            res.json({ error: " شماره یا کلمه عبور اشتباه است" });
        }
        if (password === user.password) {
            const token = jwt.sign(
                {
                    user: {
                        userId: user._id.toString(),
                        isAdmin: user.isAdmin,
                        isLogin: true
                    },
                },
                process.env.JWT_SECRET, {
                expiresIn: "7d"
            }
            );
            res.status(200).json({ token, userId: user._id.toString(), isAdmin: user.isAdmin });
        } else {
            res.json({ error: " شماره یا کلمه عبور اشتباه است" });
            const error = new Error("آدرس ایمیل یا کلمه عبور اشتباه است");
            error.statusCode = 422;
            throw error;
        }
    } catch (err) {
        console.log(err);;
    }
};

exports.Register = async (req, res, next) => {
    const { fullname, phone, password } = req.body
    console.log({ fullname, phone, password });
    const notUser = await UserSchema.findOne({ phone: phone })
    console.log({ notUser });
    if (notUser) {

        res.json({ error: "کاربری با این شماره قبلا ثبت نام کرده است" })
        console.log(55);

    } else {

        await UserSchema.create({ fullname, phone, password, isAdmin: false })

        await DateSchema.findOneAndUpdate(
            { dateFa: moment(Date.now()).locale('fa').format("YYYY-MM-DD") },
            {
                $inc: { user: 1 }
            })
        res.json({ reql: { fullname, password, phone }, Massage: "ثبت نام موفقیت آمیز بود" })
    }





};

exports.ForgetPassword = async (req, res, next) => {
    const { phone } = req.body;

    try {
        const UserSchema = await UserSchema.findOne({ phone: phone });

        if (!user) {
            const error = new Error("کاربری با این شماره در پایگاه داده ثبت نشده");
            error.statusCode = 404;
            throw error;
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        const resetLink = `http://localhost:3000/users/reset-password/${token}`;

        sendEmail(
            user.email,
            user.fullname,
            "فراموشی رمز عبور",
            `
        جهت تغییر رمز عبور فعلی رو لینک زیر کلیک کنید
        <a href="${resetLink}">لینک تغییر رمز عبور</a>
    `
        );

        res.status(200).json({
            message: "لینک ریست کلمه عبور با موفقیت ارسال شد",
        });
    } catch (err) {
        next(err);
    }
};

exports.ResetPassword = async (req, res, next) => {
    const token = req.params.token;
    const { password, confirmPassword } = req.body;

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedToken) {
            const error = new Error("شما مجوز این عملیات را ندارید");
            error.statusCode = 401;
            throw error;
        }

        if (password !== confirmPassword) {
            const error = new Error("کلمه های عبور یکسان نمی باشند");
            error.statusCode = 422;
            throw error;
        }

        const user = await UserSchema.findOne({ _id: decodedToken.userId });

        if (!user) {
            const error = new Error(
                "کاربری با این شناسه در پایگاه داده یافت نشد"
            );
            error.statusCode = 404;
            throw error;
        }

        user.password = password;
        await user.save();

        res.status(200).json({ message: "عملیات با موفقیت انجام شد" });
    } catch (err) {
        next(err);
    }
};


exports.addnumber = async (req, res, next) => {

}






exports.dashboard = async (req, res, next) => {
    const { userId } = req.body
    const user = await UserSchema.findById(userId)

    if (!user) {
        res.json({ code: 1, text: "کاریری یافت نشد" })

    } else {


        const Buy = await BuySchema.find({ userId: userId })
        const ids = Buy.map(item => item.id);
        const testId = Buy
            .filter(item => item.category === 'test')
            .map(item => item.serviceId);
        const classId = Buy
            .filter(item => item.category === 'class')
            .map(item => item.serviceId);
        const counselingId = Buy
            .filter(item => item.category === 'counseling')
            .map(item => item.serviceId);
        const StudyOfficeId = Buy
            .filter(item => item.category === 'StudyOffice')
            .map(item => item.serviceId);

        // console.log({ userId, user, ads, Buy, classes, Request, Tests });
        const ads = await AdsModel.find({ place: "dashboard" })
        const classes = await ClassModel.find({ _id: { $in: classId } }, 'week')
        const Request = await RequestSchema.find()
        const Tests = await TestSchema.find({ testID: { $in: testId }, isActive: true }, "date")

        const today = new Date(moment(Date.now()).locale('fa').format("YYYY/MM/DD"))



        const tests = Tests.sort((a, b) => new Date(a.date) - new Date(b.date)).filter(item => new Date(item.date) > today)

        const counseling = await CounselingSchema.find({ _id: { $in: counselingId } }, "counselingTime")

        res.json({
            code: 200,
            dashboard: {
                ads,
                today,
                tests,
                classes,
                counseling,
                StudyOfficeId
            }
        })
    }












};