const express = require("express");
const JaifalController = require("../../controllers/smdb/JaifalController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", JaifalController.addJaifal);
router.get("/:jaifalId", JaifalController.getOneJaifal);
router.get("/", JaifalController.getAllJaifal);
router.delete("/:jaifalId",checkAuth, JaifalController.deleteJaifal);
router.put("/:jaifalId",checkAuth, JaifalController.updateJaifal);

module.exports = router;