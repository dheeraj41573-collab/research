const express = require("express");

const ParmeliaOmphalodesController = require("../../controllers/lichMDb/ParmeliaOmphalodesController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", ParmeliaOmphalodesController.addParmeliaOmphalodes);
router.get("/:parmeliaOmphalodesId", ParmeliaOmphalodesController.getOneParmeliaOmphalodes);
router.get("/", ParmeliaOmphalodesController.getAllParmeliaOmphalodess);
router.delete("/:parmeliaOmphalodesId", checkAuth, ParmeliaOmphalodesController.deleteParmeliaOmphalodes);
router.put("/:parmeliaOmphalodesId", checkAuth, ParmeliaOmphalodesController.updateParmeliaOmphalodes);

module.exports = router;
