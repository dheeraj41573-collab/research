const express = require("express");

const UmbilicariaEsculentaController = require("../../controllers/lichMDb/UmbilicariaEsculentaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", UmbilicariaEsculentaController.addUmbilicariaEsculenta);
router.get("/:umbilicariaEsculentaId", UmbilicariaEsculentaController.getOneUmbilicariaEsculenta);
router.get("/", UmbilicariaEsculentaController.getAllUmbilicariaEsculentas);
router.delete("/:umbilicariaEsculentaId", checkAuth, UmbilicariaEsculentaController.deleteUmbilicariaEsculenta);
router.put("/:umbilicariaEsculentaId", checkAuth, UmbilicariaEsculentaController.updateUmbilicariaEsculenta);

module.exports = router;
