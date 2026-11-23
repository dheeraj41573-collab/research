const express = require("express");

const ADMEpassController = require("../../controllers/cmdb/ADMEpassController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", ADMEpassController.addADMEpass);
router.get("/:ADMEpassId", ADMEpassController.getOneADMEpass);
router.get("/", ADMEpassController.getAllADMEpass);
router.delete("/:ADMEpassId",checkAuth, ADMEpassController.deleteADMEpass);
router.put("/:ADMEpassId",checkAuth, ADMEpassController.updateADMEpass);

module.exports = router;
