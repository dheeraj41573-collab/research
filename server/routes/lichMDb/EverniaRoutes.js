const express = require("express");

const EverniaController = require("../../controllers/lichMDb/EverniaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", EverniaController.addEvernia);
router.get("/:everniaId", EverniaController.getOneEvernia);
router.get("/", EverniaController.getAllEvernias);
router.delete("/:everniaId", checkAuth, EverniaController.deleteEvernia);
router.put("/:everniaId", checkAuth, EverniaController.updateEvernia);

module.exports = router;
