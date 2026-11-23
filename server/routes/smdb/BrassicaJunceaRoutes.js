const express = require("express");

const Controller = require("../../controllers/smdb/BrassicaJunceaController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addBrassicaJuncea);
router.get("/:brassicaJunceaId", Controller.getOneBrassicaJuncea);
router.get("/", Controller.getAllBrassicaJuncea);
router.delete("/:brassicaJunceaId",checkAuth, Controller.deleteBrassicaJuncea);
router.put("/:brassicaJunceaId",checkAuth, Controller.updateBrassicaJuncea);

module.exports = router;


