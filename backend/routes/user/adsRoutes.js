const { Router } = require("express");

const router = new Router();

const {
    getAllAdsActive,
    getOneAdsActive,
    getAllByCategoryActive,
    getAllByPlaceActive
} = require("../../controllers/admin/adsControllers");

router.get("/", getAllAdsActive)
router.get("/:id", getOneAdsActive)
router.get("/category/:id", getAllByCategoryActive)
router.get("/place/:id", getAllByPlaceActive)

module.exports = router;
