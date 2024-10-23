const { strategy } = require("sharp");
const categorySchema = require("../../models/admin/categoryModel")



exports.CreateCategory = async (req, res, next) => {
    const item = req.body
    console.log(item);
    try {
        const category = await categorySchema.create(item)
        res.json({ Message: "دسته بندی افزوده شد", category })
        console.log(category);
    } catch (error) {
        res.json({ Message: error })
    }
}

exports.EditCategory = async (req, res, next) => {
    console.log("111");
    const item = req.body
    const id = req.params.id
    console.log(item);
    console.log(id);

    try {
        const category = await categorySchema.findByIdAndUpdate(id,
            {
                category: item.category,
                headline: item.headline,
                part: item.part,
                period: item.period,
                season: item.season,
                createdAt: Date.now(),
            }
        )
        console.log(category);
        res.json({ Message: "دسته بندی ویرایش شد", category })
    } catch (error) {
        res.json({ Massage: error })
    }
}

exports.GetAllCategory = async (req, res, next) => {
    const item = req.body

    try {
        const category = await categorySchema.find({})
        res.json({ category })
    } catch (error) {
        res.json({ Massage: error })
    }
}

exports.GetOneCategory = async (req, res, next) => {
    const item = req.params.id
    console.log("item");
    console.log(item);
    console.log("item");

    try {
        const category = await categorySchema.findById(item)
        res.json({ category })
    } catch (error) {
        res.json({ Massage: error })
    }
}

exports.GetAllCategoryByfilter = async (req, res, next) => {
    var category
console.log(req.params.key);
console.log(req.params.value);


    try {
        const key = req.params.key;
        switch (key) {
            case "category":
                category = await categorySchema.find({
                    category: req.params.value,

                })
                res.json({ category })

                break;
            case "part":
                category = await categorySchema.find({
                    part: req.params.value,
                })
                console.log(category);
                
                res.json({ category })
                break;
            case "headline":
                category = await categorySchema.find({

                    headline: req.params.value,

                })
                res.json({ category })
                break;
            case "period":
                category = await categorySchema.find({

                    period: req.params.value,

                })
                res.json({ category })
                break;
            case "season":
                category = await categorySchema.find({

                    season: data.get("season").toString(),
                })
                res.json({ category })

                break;
            default:
                console.log("default");
        }


    } catch (error) {
        res.json({ Massage: error })
    }

    console.log("category");
}

exports.DeleteCategory = async (req, res, next) => {
    const item = req.params.id
    console.log(item);
    try {
        await categorySchema.findByIdAndDelete(item)
        const category = await categorySchema.find({})
        res.json({ Message: "دسته بندی حذف شد", category })
        console.log(category);
    } catch (error) {
        res.json({ Message: error })
    }
}