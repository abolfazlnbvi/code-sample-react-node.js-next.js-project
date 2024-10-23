const { Router } = require("express");

const { UploadsFile, postImageResize } = require("../../middlewares/upload/uploads");
const { AddImage, AddVideo, AllImage } = require("../../controllers/admin/uplodeController");
const { verifyToken } = require("../../middlewares/VerifyTokne");
const { isAdmin } = require("../../middlewares/isAdmin");


const router = new Router();

router.get("/",verifyToken, isAdmin,
    AllImage
)
router.post("/images",verifyToken, isAdmin,
    UploadsFile.single("file"),
    AddImage
)
router.post("/videos",
    UploadsFile.single("file"),
    AddVideo
)

router.post("/pdfs",
    UploadsFile.single("file"),
    AddImage
)






module.exports = router;
