const UserSchema = require("../../models/user/userModel")



exports.GetAllUsers = async (req, res, next) => {
    try {
        const getAllTest = await UserSchema.find({})
        res.json(getAllTest)
    } catch (error) {
        res.json({ error })
    }
}