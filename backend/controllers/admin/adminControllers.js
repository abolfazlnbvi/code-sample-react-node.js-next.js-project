const DateSchema = require("../../models/dateModel");
const AdsModel = require("../../models/admin/adsModel")
const blogSchema = require("../../models/admin/blog/blogModel");
const categorySchema = require("../../models/admin/categoryModel")
const ClassModel = require("../../models/admin/course/classModel")
const RequestSchema = require("../../models/admin/request/requesModel");
const TestsSchema = require("../../models/admin/test/testMakerModel");
const UserSchema = require("../../models/user/userModel")

exports.GetAdminDashboardMainData = async (req, res, next) => {
    const id = req.params.id
    try {
        const date = await DateSchema.findOne({ dateFa: id })
        const Ads = await AdsModel.countDocuments({})
        const blog = await blogSchema.countDocuments({})
        const category = await categorySchema.countDocuments({})
        const Class = await ClassModel.countDocuments({})
        const Request = await RequestSchema.countDocuments({})
        const Tests = await TestsSchema.countDocuments({})
        const User = await UserSchema.countDocuments({})
        const AdsActive = await AdsModel.countDocuments({ isActive: true })
        const blogActive = await blogSchema.countDocuments({ isActive: true })
        const categoryActive = await categorySchema.countDocuments({ isActive: true })
        const ClassActive = await ClassModel.countDocuments({ isActive: true })
        const RequestActive = await RequestSchema.countDocuments({ isActive: true })
        const TestsActive = await TestsSchema.countDocuments({ isActive: true })
        const UserActive = await UserSchema.countDocuments({ isAdmin: true })

        res.json({
            date,
            Ads,
            blog,
            category,
            Class,
            Request,
            Tests,
            User,
            AdsActive,
            blogActive,
            categoryActive,
            ClassActive,
            RequestActive,
            TestsActive,
            UserActive,

        })
    } catch (error) {
        res.json({ error })
    }
}