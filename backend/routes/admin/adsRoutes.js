const { Router } = require("express");

const router = new Router();
const { verifyToken } = require("../../middlewares/VerifyTokne");
const { isAdmin } = require("../../middlewares/isAdmin");
const { addAds, getAllAds, getOneAds, editAds, deleteAds, getAllByCategory, getAllByPlace, setActiveAds } = require("../../controllers/admin/adsControllers");


router.post("/", verifyToken, isAdmin, addAds)
router.put("/:id",verifyToken, isAdmin, editAds)
router.put("/isactive/:id",verifyToken, isAdmin, setActiveAds)
router.get("/",getAllAds)
router.get("/:id",getOneAds)

router.delete("/:id", verifyToken, isAdmin , deleteAds)




module.exports = router;
