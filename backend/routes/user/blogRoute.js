const { Router } = require("express");

const { GetAllBlogActive, GetOneBlogActive, GetAllBlogByCategorysActive, ReadBlog} = require("../../controllers/admin/blogControllers");



const router = new Router();


router.get("/", GetAllBlogActive)
router.get("/:id", GetOneBlogActive)
router.get("/category/:id", GetAllBlogByCategorysActive)





module.exports = router;
