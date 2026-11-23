const express = require("express");

const AnziaHypoleucoidesController = require("../../controllers/lichMDb/AnziaHypoleucoidesController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", AnziaHypoleucoidesController.addAnziaHypoleucoides);
router.get("/:anziaHypoleucoidesId", AnziaHypoleucoidesController.getOneAnziaHypoleucoides);
router.get("/", AnziaHypoleucoidesController.getAllAnziaHypoleucoidess);
router.delete("/:anziaHypoleucoidesId", checkAuth, AnziaHypoleucoidesController.deleteAnziaHypoleucoides);
router.put("/:anziaHypoleucoidesId", checkAuth, AnziaHypoleucoidesController.updateAnziaHypoleucoides);

module.exports = router;
