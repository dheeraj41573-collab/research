const express = require("express");

const UmbilicariaSpodochroaController = require("../../controllers/lichMDb/UmbilicariaSpodochroaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", UmbilicariaSpodochroaController.addUmbilicariaSpodochroa);
router.get("/:umbilicariaSpodochroaId", UmbilicariaSpodochroaController.getOneUmbilicariaSpodochroa);
router.get("/", UmbilicariaSpodochroaController.getAllUmbilicariaSpodochroas);
router.delete("/:umbilicariaSpodochroaId", checkAuth, UmbilicariaSpodochroaController.deleteUmbilicariaSpodochroa);
router.put("/:umbilicariaSpodochroaId", checkAuth, UmbilicariaSpodochroaController.updateUmbilicariaSpodochroa);

module.exports = router;
