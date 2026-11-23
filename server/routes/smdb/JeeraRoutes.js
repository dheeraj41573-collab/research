const express = require("express");
const JeeraController = require("../../controllers/smdb/JeeraController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", JeeraController.addJeera);
router.get("/:jeeraId", JeeraController.getOneJeera);
router.get("/", JeeraController.getAllJeera);
router.delete("/:jeeraId",checkAuth, JeeraController.deleteJeera);
router.put("/:jeeraId",checkAuth, JeeraController.updateJeera);

module.exports = router;