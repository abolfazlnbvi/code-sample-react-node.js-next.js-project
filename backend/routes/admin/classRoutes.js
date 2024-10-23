const { Router } = require("express");

const router = new Router();
const { verifyToken } = require("../../middlewares/VerifyTokne");
const { isAdmin } = require("../../middlewares/isAdmin");
const { addCourse, getAllCourse, getOneCourse, getAllCourseByCategory, editCourse, deleteCourse, setIsActive } = require("../../controllers/admin/classControllers")

router.post("/", verifyToken, isAdmin, addCourse);
router.get("/", verifyToken, isAdmin, getAllCourse)
router.get("/:id", verifyToken, isAdmin, getOneCourse)
router.get("/category/:id", verifyToken, isAdmin, getAllCourseByCategory)
router.put("/:id", verifyToken, isAdmin, editCourse)
router.put("/isactive/:id", verifyToken, isAdmin, setIsActive)
router.delete("/:id", verifyToken, isAdmin, deleteCourse)


module.exports = router;
