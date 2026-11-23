const express = require("express");
const KesarController = require("../../controllers/smdb/KesarController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", KesarController.addKesar);
router.get("/:kesarId", KesarController.getOneKesar);
router.get("/", KesarController.getAllKesar);
router.delete("/:kesarId",checkAuth, KesarController.deleteKesar);
router.put("/:kesarId",checkAuth, KesarController.updateKesar);

module.exports = router;