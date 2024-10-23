const { Router } = require("express");

const router = new Router();
const { verifyToken } = require("../../middlewares/VerifyTokne");
const { isAdmin } = require("../../middlewares/isAdmin");
const { AddRequest, GetAllRequest, GetOneRequest, EditRequest, setIsActiveRequest, DeleteRequest, setRequestRes } = require("../../controllers/admin/requestControllers");

router.post("/", verifyToken, AddRequest);
router.get("/", verifyToken, isAdmin, GetAllRequest)
router.get("/:id", verifyToken, isAdmin, GetOneRequest)

router.put("/res/:id", verifyToken, isAdmin, setRequestRes)
router.put("/isactive/:id", verifyToken, isAdmin, setIsActiveRequest)
router.delete("/:id", verifyToken, isAdmin, DeleteRequest)


module.exports = router;
