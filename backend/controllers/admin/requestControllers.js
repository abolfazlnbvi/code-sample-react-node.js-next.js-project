
const RequestSchema = require("../../models/admin/request/requesModel");
const UserSchema = require("../../models/user/userModel")
const DateSchema = require("../../models/dateModel");
const AdsModel = require("../../models/admin/adsModel")
const blogSchema = require("../../models/admin/blog/blogModel");
const categorySchema = require("../../models/admin/categoryModel")
const ClassModel = require("../../models/admin/course/classModel")
const TestsSchema = require("../../models/admin/test/testMakerModel");
const moment = require("jalali-moment");


exports.AddRequest = async (req, res, next) => {

    const item = req.body


    try {
        const unic = await RequestSchema.findOne({ userId: item.userId, requestId: item.requestId })


        if (unic == null) {
            const request = await RequestSchema.create(item)

            const log = await DateSchema.findOneAndUpdate(
                { dateFa: moment(Date.now()).locale('fa').format("YYYY-MM-DD") },
                {
                    $inc: { request: 1 }
                })
            res.json({
                Message: "درخواست شما با موفقیت ارسال شد میتوانید از طریق پنل کاربری خود درخواست را پیگیری نمایید",
                request: request,
                code: 0
            })
        } else {
            res.json({
                Message: "درخواست شما قبل تر ارسال شده جهت پیگیری درخواست خود وارد پنل کاربری خود شوید",
                unic: unic,
                code: 2
            })

        }
    } catch (error) {
        res.json({ error })
    }

}
exports.EditRequest = async (req, res, next) => {
    const item = req.body
    const id = req.params.id
    item.url = PathChenger(item.url)
    try {
        const request = await RequestSchema.findByIdAndUpdate(id,
            {
                testName: item.testName,
                imageId: item.imageId,
                caption: item.caption,
                url: item.url,
                seoTitle: item.seoTitle,
                seoCaption: item.seoCaption,
                Categories: item.categories,
                price: item.price,
                createdAt: Date.now(),
                isActive: false
            }
        )

        res.json({ Message: "آزمون ویرایش شد", request })
    } catch (error) {
        res.json({ Massage: error })
    }
}

exports.setIsActiveRequest = async (req, res, next) => {
    const {
        isActive,
    } = req.body
    const id = req.params.id

    try {
        await RequestSchema.findByIdAndUpdate(id,
            {
                isActive: isActive,
            }
        )
        const request = await RequestSchema.find({})

        res.json({ Message: isActive == true ? "آزمون فعال شد" : "آزمون غیرفعال شد", request })
    } catch (error) {
        res.json({ Massage: error })
    }
}
exports.setStatusRequest = async (req, res, next) => {
    const {
        status,
    } = req.body
    const id = req.params.id

    try {
        await RequestSchema.findByIdAndUpdate(id,
            {
                status: status,
            }
        )
        const request = await RequestSchema.find({})

        res.json({ Message: isActive == true ? "آزمون فعال شد" : "آزمون غیرفعال شد", request })
    } catch (error) {
        res.json({ Massage: error })
    }
}




exports.GetAllRequest = async (req, res, next) => {

    try {
        const request = await RequestSchema.find({})
        console.log("request", request);
        res.json({ request })
    } catch (error) {
        res.json({ error })
    }
}

exports.setRequestRes = async (req, res, next) => {
    const id = req.params.id
    const item = req.body
    try {
        const request = await RequestSchema.findByIdAndUpdate(id,
            {
                status: item.status,
                adminText: item.adminText,
                admin: item.userId,
                isActive: true
            }
        )
        res.json({ request })
    } catch (error) {
        res.json({ error })
    }
}



exports.GetOneRequest = async (req, res, next) => {

    const id = req.params.id

    try {
        const request = await RequestSchema.findByIdAndUpdate(id,
            {
                status: 1,
            }
        )
        console.log(request);

        const user = await UserSchema.findById(request.userId, "_id fullname phone createdAt")


        var requestId

        switch (request.place[0]) {
            case "test":
                requestId = await TestsSchema.findById(request.requestId, "_id testName price isActive createdAt")

                break;

            default:
                console.log("default");
        }

        console.log({
            iiiiiiiiiiiiiiiiiiiii: {
                request,
                user,
                requestId
            }
        });

        res.json({
            request,
            user,
            requestId
        })
    } catch (error) {
        res.json({ error })
    }
}
exports.DeleteRequest = async (req, res, next) => {
    const id = req.params.id
    try {
        await RequestSchema.findOneAndDelete({ _id: id })
        res.json({ Message: "آزمون حذف شد" })
    } catch (error) {
        res.json({ error })
    }
}

exports.GetAllRequestByfilterAndActive = async (req, res, next) => {
    var request
    try {
        const key = req.params.key;







        switch (key) {
            case "testName":
                request = await RequestSchema.find({
                    testName: req.params.value,
                    isActive: true

                })
                res.json({ request })

                break;
            case "imageId":
                request = await RequestSchema.find({
                    imageId: req.params.value,
                    isActive: true,
                })
                res.json({ request })
                break;
            case "url":
                request = await RequestSchema.find({

                    url: req.params.value,
                    isActive: true,
                })
                res.json({ request })
                break;
            case "Categories":
                tesr = await RequestSchema.find({

                    Categories: req.params.value,
                    isActive: true,
                })
                res.json({ request })
                break;
            case "active":
                request = await RequestSchema.find({

                    isActive: req.params.value,
                })
                res.json({ request })

                break;
            case "id":
                request = await RequestSchema.findOne({
                    _id: req.params.value,
                    isActive: true,
                })
                res.json({ request })

                break;
            default:
                console.log("default");
        }


    } catch (error) {
        res.json({ Massage: error })
    }

}

