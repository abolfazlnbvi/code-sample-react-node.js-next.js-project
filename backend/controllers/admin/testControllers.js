
const TestsSchema = require("../../models/admin/test/testMakerModel");
const TestSchema = require("../../models/admin/test/testModel");


const { PathChenger } = require("../../utils/pathchenger");

exports.AddTests = async (req, res, next) => {

    const item = req.body
    console.log(item);
    
    item.path = PathChenger(item.path)
    try {

        const addTest = await TestsSchema.create(item)

        res.json({
            Message: "آزمون با موفقیت ساخته شد",
            Test: addTest
        })
    } catch (error) {
        res.json({ error })
    }

}
exports.EditTests = async (req, res, next) => {
    const item = req.body
    const id = req.params.id
    item.url = PathChenger(item.url)
    try {
        const test = await TestsSchema.findByIdAndUpdate(id,
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

        res.json({ Message: "آزمون ویرایش شد", test })
    } catch (error) {
        res.json({ Massage: error })
    }
}

exports.setIsActiveTests = async (req, res, next) => {
    const {
        isActive,
    } = req.body
    const id = req.params.id

    try {
        await TestsSchema.findByIdAndUpdate(id,
            {
                isActive: isActive,
            }
        )
        const test = await TestsSchema.find({})

        res.json({ Message: isActive == true ? "آزمون فعال شد" : "آزمون غیرفعال شد", test })
    } catch (error) {
        res.json({ Massage: error })
    }
}




exports.GetAllTests = async (req, res, next) => {

    try {
        const test = await TestsSchema.find({})
        res.json({ test })
    } catch (error) {
        res.json({ error })
    }
}


exports.GetOneTests = async (req, res, next) => {
    const id = req.params.id

    try {
        const getOneTest = await TestsSchema.findById({ _id: id })
        res.json(getOneTest)
    } catch (error) {
        res.json({ error })
    }
}
exports.DeleteTests = async (req, res, next) => {
    const id = req.params.id
    try {
        await TestsSchema.findOneAndDelete({ _id: id })
        res.json({ Message: "آزمون حذف شد" })
    } catch (error) {
        res.json({ error })
    }
}

exports.GetAllTestsByfilterAndActive = async (req, res, next) => {
    var test
    try {
        const key = req.params.key;







        switch (key) {
            case "testName":
                test = await TestsSchema.find({
                    testName: req.params.value,
                    isActive: true

                })
                res.json({ test })

                break;
            case "imageId":
                test = await TestsSchema.find({
                    imageId: req.params.value,
                    isActive: true,
                })
                res.json({ test })
                break;
            case "url":
                test = await TestsSchema.find({

                    url: req.params.value,
                    isActive: true,
                })
                res.json({ test })
                break;
            case "Categories":
                tesr = await TestsSchema.find({

                    Categories: req.params.value,
                    isActive: true,
                })
                res.json({ test })
                break;
            case "active":
                test = await TestsSchema.find({

                    isActive: req.params.value,
                })
                res.json({ test })

                break;
            case "id":
                test = await TestsSchema.findOne({
                    _id: req.params.value,
                    isActive: true,
                })
                res.json({ test })

                break;
            default:
                console.log("default");
        }


    } catch (error) {
        res.json({ Massage: error })
    }

}


//********************************************************



exports.AddTest = async (req, res, next) => {

    const item = req.body
    const id = req.params.id
    try {
        const test = await TestsSchema.findById(id)
        if (test != null || test != undefined || test != []) {

            const addTest = await TestSchema.create(item)

            res.json({
                Message: "امتحان با موفقیت ساخته شد",
                Test: addTest
            })

        } else {
            res.json({
                Message: "آزمونی یافت نشد",
                Test: []
            })
        }

    } catch (error) {
        res.json({ error })
    }

}
exports.EditTest = async (req, res, next) => {

    const item = req.body
    const id = req.params.id

    try {
        const test = await TestSchema.findByIdAndUpdate(id,
            {
                testID: item.testID,
                testName: item.testName,
                date: item.date,
                price: item.price,
                caption: item.caption,
                place: item.place,
                createdAt: Date.now(),
                isActive: false
            }
        )
        res.json({ Message: "آزمون ویرایش شد", test })
    } catch (error) {
        res.json({ Massage: error })
    }
}

exports.setIsActiveTest = async (req, res, next) => {
    const {
        isActive, testID
    } = req.body
    const id = req.params.id

    try {
        const set = await TestSchema.findByIdAndUpdate(id,
            {
                isActive: isActive,
            }
        )
        const testid = await TestsSchema.findById(testID)
       await TestsSchema.findByIdAndUpdate(testID, {
        price: set.isActive == true ? testid.price - set.price : testid.price + set.price
       })
        const test = await TestsSchema.findById(testID)

        const exam = await TestSchema.find({ testID: testID })
        console.log(test);

        res.json({ Message: isActive == true ? "آزمون فعال شد" : "آزمون غیرفعال شد", exam, test })
    } catch (error) {
        res.json({ Massage: error })
    }
}




exports.GetAllTest = async (req, res, next) => {

    const id = req.params.id

    try {
        const test = await TestSchema.find({ testID: id })
        res.json({ test })

    } catch (error) {
        res.json({ error })
    }
}


exports.GetOneTest = async (req, res, next) => {
    const id = req.params.id


    try {
        const getOneTest = await TestSchema.findById({ _id: id })

        res.json(getOneTest)
    } catch (error) {
        res.json({ error })
    }
}
exports.DeleteTest = async (req, res, next) => {
    const id = req.params.id



    try {
        const exam = await TestSchema.findOneAndDelete({ _id: id })
        const test = await TestsSchema.findById(exam.testID)
        await TestsSchema.findByIdAndUpdate(exam.testID, { price: test.price - exam.price })


        res.json({ Message: "امتحان حذف شد" })
    } catch (error) {
        res.json({ error })
    }
}

exports.GetAllExamByfilterAndActive = async (req, res, next) => {




    try {
        const key = req.params.key;


        var test
        switch (key) {
            case "testID":
                test = await TestSchema.find({
                    testID: req.params.value,
                    isActive: true

                })

                res.json({ test })

                break;
            case "testName":
                test = await TestSchema.find({
                    testName: req.params.value,
                    isActive: true,
                })
                res.json({ test })
                break;
            case "date":
                test = await TestSchema.find({

                    date: req.params.value,
                    isActive: true,
                })
                res.json({ test })
                break;
            case "place":
                test = await TestSchema.find({

                    place: req.params.value,
                    isActive: true,
                })
                res.json({ test })
                break;
            case "active":
                test = await TestSchema.find({

                    isActive: req.params.value,
                })
                res.json({ test })

                break;
            case "id":
                test = await TestSchema.find({
                    _id: req.params.value,
                    isActive: true,
                })
                res.json({ test })

                break;
            default:
                res.json({ test: [] })
        }


    } catch (error) {
        res.json({ Massage: error })
    }

}





//***********************************************************
/*


exports.AddQuestion = async (req, res, next) => {
    const item = req.body

    try {
        if (!await TestsSchema.findById(item.idTest)) {
            res.json({ Message: "دوره یافت نشد" })
        } else {

            const addQuestion = await QuestionSchema.create(item)
            console.log(addQuestion);
            res.json({
                Message: "سوال اضافه شد",
                question: addQuestion,
                id: item.idTest
            })
        }

    } catch (error) {
        res.json({ error })
    }
}
exports.EditQuestion = async (req, res, next) => {
    const item = req.body
    const id = req.params.id
    try {
        const editQuestion = await QuestionSchema.findByIdAndUpdate({ _id: id }, item)
        res.json({
            Message: "سوال ویرایش شد",
            question: editQuestion
        })

    } catch (error) {
        res.json({ error })
    }
}
exports.GetQuestionByTest = async (req, res, next) => {
    const id = req.params.id
    try {
        const getQuestionByTest = await QuestionSchema.find({ idTest: id })
        res.json({ getQuestionByTest })
    } catch (error) {
        res.json({ error })
    }
}
exports.GetQuestionByCategories = async (req, res, next) => {
    const id = req.params.id
    try {
        const getQuestionByCategories = await QuestionSchema.find({ categories })
        res.json({ getQuestionByCategories })
    } catch (error) {
        res.json({ error })
    }
}

exports.GetQuestionByCategoriesActive = async (req, res, next) => {
    try {
        const getAllTest = await TestsSchema.find({})
        res.json(getAllTest)
    } catch (error) {
        res.json({ error })
    }
}
exports.GetQuestionByTestActive = async (req, res, next) => {
    try {
        const getAllTest = await TestsSchema.find({})
        res.json(getAllTest)
    } catch (error) {
        res.json({ error })
    }
}





exports.DeleteQuestion = async (req, res, next) => {
    const id = req.params.id
    try {
        await QuestionSchema.findByIdAndDelete({ _id: id })
        res.json({ Message: "سوال حذف شد", id: id })
    } catch (error) {
        res.json({ error })
    }
}

*/


/*

    testName: {
        type: String,
        required: true
    },
    imageId: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    seoTitle: {
        type: String,
        required: true
    },
    seoCaption: {
        type: String,
        required: true
    },
    Categories: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
});





*/

//****************************************************************** */

// testID: {
//     type: mongoose.Schema.ObjectId,
//     required: true
// },
// testName: {
//     type: String,
//     required: true
// },
// date: {
//     type: Date,
//     required: true
// },
// price: {
//     type: Array,
//     required: true
// },
// caption: {
//     type: String,
//     required: true
// },
// isActive: {
//     type: Boolean,
//     default: false
// },
// place: {
//     type: String,
//     required: true
// },
// createdAt: {
//     type: Date,
//     default: Date.now
// },