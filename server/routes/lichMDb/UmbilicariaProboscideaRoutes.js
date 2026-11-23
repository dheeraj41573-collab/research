const express = require("express");

const UmbilicariaProboscideaController = require("../../controllers/lichMDb/UmbilicariaProboscideaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", UmbilicariaProboscideaController.addUmbilicariaProboscidea);
router.get("/:umbilicariaProboscideaId", UmbilicariaProboscideaController.getOneUmbilicariaProboscidea);
router.get("/", UmbilicariaProboscideaController.getAllUmbilicariaProboscideas);
router.delete("/:umbilicariaProboscideaId", checkAuth, UmbilicariaProboscideaController.deleteUmbilicariaProboscidea);
router.put("/:umbilicariaProboscideaId", checkAuth, UmbilicariaProboscideaController.updateUmbilicariaProboscidea);

module.exports = router;
