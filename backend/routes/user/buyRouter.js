const { Router } = require("express");
const { Buy, GetBuyedCheck } = require("../../controllers/user/buyController");
const { verifyToken } = require("../../middlewares/VerifyTokne");

const router = new Router();


router.post("/", verifyToken, Buy);
router.get("/buyed/:serviceId/:userId", verifyToken, GetBuyedCheck)


module.exports = router;