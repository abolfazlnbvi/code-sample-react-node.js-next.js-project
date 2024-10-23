const { Router } = require("express");

const { login, Register, ForgetPassword, ResetPassword, addnumber, dashboard } = require('../../controllers/user/UserController');
const { verifyToken } = require("../../middlewares/VerifyTokne");
const { isAdmin } = require("../../middlewares/isAdmin");

const router = new Router();

//  @desc   Login Handle
//  @route  POST /users/login
router.post("/login", login);
router.post("/addnumber", addnumber);
router.get("/handleAdminDashboard", verifyToken, isAdmin, (req, res) => res.json({ code: 200 }));
router.get("/handledashboard", verifyToken, (req, res) => res.json({ code: 200 }));
router.get("/dashboard", verifyToken, dashboard);

//  @desc   Handle Forget Password
//  @route  POST /users/forget-password
router.post("/forget-password", ForgetPassword);

//  @desc   Handle reset Password
//  @route  POST /users/reset-password/:token
router.post("/reset-password/:token", ResetPassword);

//  @desc   Register Handle
//  @route  POST /users/register

router.post("/register", Register);

router.get("/user/myprofile");

module.exports = router;