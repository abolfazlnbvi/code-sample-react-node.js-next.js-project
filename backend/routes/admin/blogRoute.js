const { Router } = require("express");
const { verifyToken } = require("../../middlewares/VerifyTokne");
const { isAdmin } = require("../../middlewares/isAdmin");
const { CreateBlog,setIsActive, EditBlog, GetAllBlog, GetOneBlog, GetAllBlogByCategorys, DeleteBlog } = require("../../controllers/admin/blogControllers");



const router = new Router();


router.post("/", verifyToken, isAdmin, CreateBlog)
router.put("/:id",verifyToken, isAdmin, EditBlog)
router.put("/isactive/:id",verifyToken, isAdmin, setIsActive)
router.get("/",verifyToken, isAdmin, GetAllBlog)
router.get("/:id",verifyToken, isAdmin, GetOneBlog)
router.get("/:id",verifyToken, isAdmin, GetAllBlogByCategorys)
router.delete("/:id", verifyToken, isAdmin , DeleteBlog)






module.exports = router;
