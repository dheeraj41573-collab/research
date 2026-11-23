const express = require("express");

const UsneaUndulataController = require("../../controllers/lichMDb/UsneaUndulataController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", UsneaUndulataController.addUsneaUndulata);
router.get("/:usneaUndulataId", UsneaUndulataController.getOneUsneaUndulata);
router.get("/", UsneaUndulataController.getAllUsneaUndulatas);
router.delete("/:usneaUndulataId", checkAuth, UsneaUndulataController.deleteUsneaUndulata);
router.put("/:usneaUndulataId", checkAuth, UsneaUndulataController.updateUsneaUndulata);

module.exports = router;
