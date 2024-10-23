const ClassModel = require("../../models/admin/course/classModel")
const UserSchema = require("../../models/user/userModel")

exports.addCourse = async (req, res, next) => {
    const item = req.body
console.log({item});

    try {

        const classes = await ClassModel.create(item)
        console.log(
            classes
        );
        
        res.json({ Message: "کلاس افزوده شد", classes })

    } catch (error) {

        res.json({ error })

    }
}

exports.editCourse = async (req, res, next) => {
    console.log("111");
    const {
        userId,
        name,
        image,
        category,
        master,
        capacity,
        caption,
        price,
        place,
        time,
        week,
        path,
        isActive,
    } = req.body
    const id = req.params.id

    console.log(id);
    console.log({
        userId,
        name,
        image,
        category,
        master,
        capacity,
        caption,
        price,
        place,
        time,
        week,
        path,
        isActive,
    });

    try {
        const classes = await ClassModel.findByIdAndUpdate(id,
            {
                userId: userId,
                name: name,
                image: image,
                category: category,
                master: master,
                capacity: capacity,
                caption: caption,
                price: price,
                place: place,
                time: time,
                week: week,
                path: path,
                isActive: isActive,
                createdAt: Date.now()
            }
        )
        console.log(classes);
        res.json({ Message: "کلاس ویرایش شد", classes })
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
        await ClassModel.findByIdAndUpdate(id,
            {
                isActive: isActive,
            }
        )
        const classes = await ClassModel.find({})
        console.log(classes);
        res.json({ Message: isActive == true ? "کلاس فعال شد" : "کلاس غیرفعال شد", classes })
    } catch (error) {
        res.json({ Massage: error })
    }
}



exports.getAllCourse = async (req, res, next) => {
    try {
        const classes = await ClassModel.find({})

        res.json(classes)
    } catch (error) {
        res.json({ error })
    }
}
exports.getAllCourseByCategory = async (req, res, next) => {
    try {
        const classes = await ClassModel.find({ categories: req.prams.id })

        res.json(classes)
    } catch (error) {
        res.json({ error })
    }
}

exports.getOneCourse = async (req, res, next) => {

    try {
        const classes = await ClassModel.findById(req.params.id)
        res.json({ classes })
    } catch (error) {
        res.json({ Massage: error })
    }
}


exports.getAllCourseActive = async (req, res, next) => {
    try {

        const classes = await ClassModel.find({ isActive: true })

        res.json({ classes })
    } catch (error) {
        res.json({ error })
    }
}
exports.getAllCourseByCategoryActive = async (req, res, next) => {
    try {
        const classes = await ClassModel.find({ categories: req.prams.id, isActive: true })

        res.json(classes)
    } catch (error) {
        res.json({ error })
    }
}




exports.getOneCourseActive = async (req, res, next) => {
    try {
        const classes = await ClassModel.findById(req.params.id)

        const master = await UserSchema.findById(classes.userId, 'fullname')
        console.log({ classes, master });
        classes.isActive == true ? res.json({ classes, master }) : res.json({ Massage: "اجازه دسترسی ندارید" })
    } catch (error) {
        res.json({ error })
    }
}




exports.deleteCourse = async (req, res, next) => {
    const id = req.params.id
    console.log(id);
    try {
        await ClassModel.findByIdAndDelete(id)

        const classes = await ClassModel.find({})
        console.log(classes);
        res.json({ Message: "کلاس حذف شد", classes })
    } catch (error) {
        res.json({ Massage: error })
    }
}