const express = require("express");

const Controller = require("../../controllers/smdb/AnthriscusCerefoliumController.js")
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addAnthriscusCerefolium);
router.get("/:anthriscusCerefoliumId", Controller.getOneAnthriscusCerefolium);
router.get("/", Controller.getAllAnthriscusCerefolium);
router.delete("/:anthriscusCerefoliumId",checkAuth, Controller.deleteAnthriscusCerefolium);
router.put("/:anthriscusCerefoliumId",checkAuth, Controller.updateAnthriscusCerefolium);

module.exports = router;


