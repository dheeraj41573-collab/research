const express = require("express");

const UsneaArticulataController = require("../../controllers/lichMDb/UsneaArticulataController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", UsneaArticulataController.addUsneaArticulata);
router.get("/:usneaArticulataId", UsneaArticulataController.getOneUsneaArticulata);
router.get("/", UsneaArticulataController.getAllUsneaArticulatas);
router.delete("/:usneaArticulataId", checkAuth, UsneaArticulataController.deleteUsneaArticulata);
router.put("/:usneaArticulataId", checkAuth, UsneaArticulataController.updateUsneaArticulata);

module.exports = router;
