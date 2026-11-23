const express = require("express");

const UmbilicariaPolyphyllaController = require("../../controllers/lichMDb/UmbilicariaPolyphyllaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", UmbilicariaPolyphyllaController.addUmbilicariaPolyphylla);
router.get("/:umbilicariaPolyphyllaId", UmbilicariaPolyphyllaController.getOneUmbilicariaPolyphylla);
router.get("/", UmbilicariaPolyphyllaController.getAllUmbilicariaPolyphyllas);
router.delete("/:umbilicariaPolyphyllaId", checkAuth, UmbilicariaPolyphyllaController.deleteUmbilicariaPolyphylla);
router.put("/:umbilicariaPolyphyllaId", checkAuth, UmbilicariaPolyphyllaController.updateUmbilicariaPolyphylla);

module.exports = router;
