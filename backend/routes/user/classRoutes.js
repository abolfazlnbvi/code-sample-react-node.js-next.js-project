const { Router } = require("express");

const router = new Router();
const { verifyToken } = require("../../middlewares/VerifyTokne");
const { isAdmin } = require("../../middlewares/isAdmin");
const {getAllCourseActive, getOneCourseActive, getAllCourseByCategoryActive} = require("../../controllers/admin/classControllers")


router.get("/", getAllCourseActive)
router.get("/:id", getOneCourseActive)
router.get("/category/:id",getAllCourseByCategoryActive)



module.exports = router;
