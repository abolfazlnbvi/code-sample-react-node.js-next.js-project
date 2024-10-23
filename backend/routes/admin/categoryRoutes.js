const { Router } = require("express");
const { verifyToken } = require("../../middlewares/VerifyTokne");
const { isAdmin } = require("../../middlewares/isAdmin");
const {
    CreateCategory,
    EditCategory,
    GetAllCategory,
    GetOneCategory,
    GetAllCategoryByfilter,
    DeleteCategory
} = require("../../controllers/admin/categoryControllers");



const router = new Router();


router.post("/", verifyToken, isAdmin, CreateCategory)
router.put("/:id", verifyToken, isAdmin, EditCategory)
router.get("/", verifyToken, isAdmin, GetAllCategory)
router.get("/:id", verifyToken, isAdmin, GetOneCategory)
router.get("/filter/:key/:value", verifyToken, isAdmin, GetAllCategoryByfilter)
router.delete("/:id", verifyToken, isAdmin, DeleteCategory)






module.exports = router;
