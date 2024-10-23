const { Router } = require("express");

const router = new Router();
const { verifyToken } = require("../../middlewares/VerifyTokne");
const { isAdmin } = require("../../middlewares/isAdmin");
const { GetAllUsers } = require("../../controllers/admin/usersAdminController");
const { GetAdminDashboardMainData } = require("../../controllers/admin/adminControllers");



router.get("/", verifyToken, isAdmin, GetAllUsers);
router.get("/main/:id", verifyToken, isAdmin, GetAdminDashboardMainData);



module.exports = router;
