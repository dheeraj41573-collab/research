const express = require("express");

const CladoniaMacilentaController = require("../../controllers/lichMDb/CladoniaMacilentaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", CladoniaMacilentaController.addCladoniaMacilenta);
router.get("/:cladoniaMacilentaId", CladoniaMacilentaController.getOneCladoniaMacilenta);
router.get("/", CladoniaMacilentaController.getAllCladoniaMacilentas);
router.delete("/:cladoniaMacilentaId", checkAuth, CladoniaMacilentaController.deleteCladoniaMacilenta);
router.put("/:cladoniaMacilentaId", checkAuth, CladoniaMacilentaController.updateCladoniaMacilenta);

module.exports = router;
