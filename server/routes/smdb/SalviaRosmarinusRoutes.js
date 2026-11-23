const express = require("express");

const Controller = require("../../controllers/smdb/SalviaRosmarinusController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addSalviaRosmarinus);
router.get("/:salviaRosmarinusId", Controller.getOneSalviaRosmarinus);
router.get("/", Controller.getAllSalviaRosmarinus);
router.delete("/:salviaRosmarinusId",checkAuth, Controller.deleteSalviaRosmarinus);
router.put("/:salviaRosmarinusId",checkAuth, Controller.updateSalviaRosmarinus);

module.exports = router;


