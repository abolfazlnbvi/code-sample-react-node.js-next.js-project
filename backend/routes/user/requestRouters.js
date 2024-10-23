const { Router } = require("express");

const router = new Router();
const { verifyToken } = require("../../middlewares/VerifyTokne");
const { isAdmin } = require("../../middlewares/isAdmin");
const { AddRequest, GetAllRequest, GetOneRequest, EditRequest, setIsActiveRequest, DeleteRequest, GetBuyedCheck } = require("../../controllers/admin/requestControllers");

router.post("/", verifyToken, AddRequest);
router.get("/", verifyToken, isAdmin, GetAllRequest)
router.get("/:id", verifyToken, isAdmin, GetOneRequest)

router.put("/:id", verifyToken, isAdmin, EditRequest)
router.put("/isactive/:id", verifyToken, isAdmin, setIsActiveRequest)
router.delete("/:id", verifyToken, isAdmin, DeleteRequest)


module.exports = router;
