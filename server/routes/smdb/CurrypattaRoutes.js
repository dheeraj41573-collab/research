const express = require("express");

const CurrypattaController = require("../../controllers/smdb/CurrypattaController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", CurrypattaController.addCurrypatta);
router.get("/:currypattaId", CurrypattaController.getOneCurrypatta);
router.get("/", CurrypattaController.getAllCurrypatta);
router.delete("/:currypattaId",checkAuth, CurrypattaController.deleteCurrypatta);
router.put("/:currypattaId",checkAuth, CurrypattaController.updateCurrypatta);

module.exports = router;