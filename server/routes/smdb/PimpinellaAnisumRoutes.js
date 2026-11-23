const express = require("express");

const Controller = require("../../controllers/smdb/PimpinellaAnisumController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addPimpinellaAnisum);
router.get("/:pimpinellaAnisumId", Controller.getOnePimpinellaAnisum);
router.get("/", Controller.getAllPimpinellaAnisum);
router.delete("/:pimpinellaAnisumId",checkAuth, Controller.deletePimpinellaAnisum);
router.put("/:pimpinellaAnisumId",checkAuth, Controller.updatePimpinellaAnisum);

module.exports = router;


