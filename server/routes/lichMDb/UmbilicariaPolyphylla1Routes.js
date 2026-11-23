const express = require("express");

const UmbilicariaPolyphylla1Controller = require("../../controllers/lichMDb/UmbilicariaPolyphylla1Controller.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", UmbilicariaPolyphylla1Controller.addUmbilicariaPolyphylla1);
router.get("/:umbilicariaPolyphylla1Id", UmbilicariaPolyphylla1Controller.getOneUmbilicariaPolyphylla1);
router.get("/", UmbilicariaPolyphylla1Controller.getAllUmbilicariaPolyphyllas1);
router.delete("/:umbilicariaPolyphylla1Id", checkAuth, UmbilicariaPolyphylla1Controller.deleteUmbilicariaPolyphylla1);
router.put("/:umbilicariaPolyphylla1Id", checkAuth, UmbilicariaPolyphylla1Controller.updateUmbilicariaPolyphylla1);

module.exports = router;
