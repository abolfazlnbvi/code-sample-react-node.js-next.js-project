const blogSchema = require("../../models/admin/blog/blogModel");
const { PathChenger } = require("../../utils/pathchenger");
const moment = require("jalali-moment");
const DateSchema = require("../../models/dateModel");
exports.CreateBlog = async (req, res, next) => {
    const item = req.body
    item.path = PathChenger(item.path)
    console.log(item);
    try {
        const blog = await blogSchema.create({
            userId: item.userId,
            name: item.name,
            image: item.image,
            categories: item.categories,
            blog: item.blog,
            path: item.path,
            seo: item.seo,
            isActive: item.isActive,
        })
        res.json({ Message: "بلاگ افزوده شد", blog })
        console.log(blog);
    } catch (error) {
        res.json({ Message: error })
    }
}

exports.EditBlog = async (req, res, next) => {
    const item = req.body
    const id = req.params.id
    item.path = PathChenger(item.path)
    console.log(item);
    try {
        const blog = await blogSchema.findByIdAndUpdate(id,
            {

                userId: item.userId,
                name: item.name,
                image: item.image,
                categories: item.categories,
                blog: item.blog,
                path: item.path,
                seo: item.seo,
                isActive: item.isActive,
                createdAt: Date.now(),
            }
        )
        console.log(blog);
        res.json({ Message: "بلاگ ویرایش شد", blog })
    } catch (error) {
        res.json({ Massage: error })
    }
}


exports.setIsActive = async (req, res, next) => {
    const {
        isActive,
    } = req.body
    const id = req.params.id

    console.log(id);
    console.log({
        isActive,
    });

    try {
        await blogSchema.findByIdAndUpdate(id,
            {
                isActive: isActive,
            }
        )
        const blog = await blogSchema.find({})
        console.log(blog);
        res.json({ Message: isActive == true ? "بلاگ فعال شد" : "بلاگ غیرفعال شد", blog })
    } catch (error) {
        res.json({ Massage: error })
    }
}


exports.GetAllBlog = async (req, res, next) => {
    const item = req.body

    try {
        const blog = await blogSchema.find({})
        res.json({ Massage: "بلاگ افزوده شد", blog })
    } catch (error) {
        res.json({ Massage: error })
    }
}

exports.GetOneBlog = async (req, res, next) => {
    const item = req.params.id
    console.log(item);

    try {
        const blog = await blogSchema.findById(item)
        res.json({ blog })
    } catch (error) {
        res.json({ Massage: error })
    }
}

exports.GetAllBlogByCategorys = async (req, res, next) => {
    const id = req.params.id

    try {
        const blog = await blogSchema.find({ categories: id })
        res.json({ blog })
    } catch (error) {
        res.json({ Massage: error })
    }
}




exports.GetAllBlogActive = async (req, res, next) => {
    const id = req.params.id
    console.log();

    try {
        const blog = await blogSchema.find({ isActive: true }, 'name image categories path read createdAt')

        res.json({ blog })

    } catch (error) {
        res.json({ Massage: error })
    }
}
exports.GetOneBlogActive = async (req, res, next) => {
    const id = req.params.id
    console.log(id);
    try {

        const blog = await blogSchema.findByIdAndUpdate(id, { $inc: { read: 1 } })
  

       await DateSchema.findOneAndUpdate(
            { dateFa: moment(Date.now()).locale('fa').format("YYYY-MM-DD") },
            {
                $inc: { blog: 1 }
            })

        blog.isActive == true ? res.json({ blog }) : res.json({ Message: "اجازه دسترسی ندارید" })

    } catch (error) {
        res.json({ Massage: error })
    }
}
exports.GetAllBlogByCategorysActive = async (req, res, next) => {
    const id = req.prams.id

    try {
        const blog = await blogSchema.find({ categories: id, isActive: true })
        res.json({ blog })
    } catch (error) {
        res.json({ Massage: error })
    }
}







exports.ReadBlog = async (req, res, next) => {
    const id = req.params.id

    try {
        const blog = await blogSchema.findByIdAndUpdate(id, { read: +1 })
        const dateCheck = await DateSchema.findOne({ dateFa: moment(Date.now()).locale('fa').format("YYYY-MM-DD") })
        await DateSchema.findByIdAndUpdate(dateCheck._id, { user: dateCheck.user + 1 })
        res.json({ blog })
    } catch (error) {
        res.json({ Massage: error })
    }
}

exports.DeleteBlog = async (req, res, next) => {
    const id = req.params.id
    try {
        await blogSchema.findByIdAndDelete(id)

        const blog = await blogSchema.find({})
        res.json({ Message: "بلاگ حذف شد", blog })
    } catch (error) {
        res.json({ Massage: error })
    }
}