const express = require("express");

const CladoniaConvolutaController = require("../../controllers/lichMDb/CladoniaConvolutaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", CladoniaConvolutaController.addCladoniaConvoluta);
router.get("/:cladoniaConvolutaId", CladoniaConvolutaController.getOneCladoniaConvoluta);
router.get("/", CladoniaConvolutaController.getAllCladoniaConvolutas);
router.delete("/:cladoniaConvolutaId", checkAuth, CladoniaConvolutaController.deleteCladoniaConvoluta);
router.put("/:cladoniaConvolutaId", checkAuth, CladoniaConvolutaController.updateCladoniaConvoluta);

module.exports = router;
