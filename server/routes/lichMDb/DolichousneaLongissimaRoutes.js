const express = require("express");

const DolichousneaLongissimaController = require("../../controllers/lichMDb/DolichousneaLongissimaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", DolichousneaLongissimaController.addDolichousneaLongissima);
router.get("/:dolichousneaLongissimaId", DolichousneaLongissimaController.getOneDolichousneaLongissima);
router.get("/", DolichousneaLongissimaController.getAllDolichousneaLongissimas);
router.delete("/:dolichousneaLongissimaId", checkAuth, DolichousneaLongissimaController.deleteDolichousneaLongissima);
router.put("/:dolichousneaLongissimaId", checkAuth, DolichousneaLongissimaController.updateDolichousneaLongissima);

module.exports = router;
