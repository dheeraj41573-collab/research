const express = require("express");

const PyrenulaPseudobufoniaController = require("../../controllers/lichMDb/PyrenulaPseudobufoniaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", PyrenulaPseudobufoniaController.addPyrenulaPseudobufonia);
router.get("/:pyrenulaPseudobufoniaId", PyrenulaPseudobufoniaController.getOnePyrenulaPseudobufonia);
router.get("/", PyrenulaPseudobufoniaController.getAllPyrenulaPseudobufonias);
router.delete("/:pyrenulaPseudobufoniaId", checkAuth, PyrenulaPseudobufoniaController.deletePyrenulaPseudobufonia);
router.put("/:pyrenulaPseudobufoniaId", checkAuth, PyrenulaPseudobufoniaController.updatePyrenulaPseudobufonia);

module.exports = router;
