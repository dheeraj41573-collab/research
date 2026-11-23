

const express = require("express");

const UsneaFloridaController = require("../../controllers/lichMDb/UsneaFloridaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", UsneaFloridaController.addUsneaFlorida);
router.get("/:usneaFloridaId", UsneaFloridaController.getOneUsneaFlorida);
router.get("/", UsneaFloridaController.getAllUsneaFloridas);
router.delete("/:usneaFloridaId", checkAuth, UsneaFloridaController.deleteUsneaFlorida);
router.put("/:usneaFloridaId", checkAuth, UsneaFloridaController.updateUsneaFlorida);

module.exports = router;
