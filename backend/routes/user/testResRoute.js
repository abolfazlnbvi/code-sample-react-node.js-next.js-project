const { Router } = require("express");



const {

    GetAllTestsByfilterAndActive,
    GetAllExamByfilterAndActive,

} = require("../../controllers/admin/testControllers")
const { verifyToken } = require("../../middlewares/VerifyTokne");
const { isAdmin } = require("../../middlewares/isAdmin");

const router = new Router();
//..............................................................
// testRoutes


router.get("/:key/:value", GetAllTestsByfilterAndActive)
router.get("/exam/:key/:value", GetAllExamByfilterAndActive)


//.......................................................



module.exports = router;
