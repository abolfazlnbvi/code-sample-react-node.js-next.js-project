const UserSchema = require('../models/user/userModel');

exports.isAdmin = async (req, res, next) => {

  try {

    const id = req.body.userId;



    const user = await UserSchema.findOne({ _id: id });

    if (!user) {

      res.json({ Message: "کاربری یافت نشد", code: 1 })
      console.log("code 1");
    } else if (user.isAdmin !== true) {
      console.log("code 10");
      res.json({ Massage: "فقط ادمین اجازه دسترسی دارد", code: 1 })
    } else {

      console.log("admin");
      next()
    }



  } catch (error) {
    console.log(error)
  }
};
