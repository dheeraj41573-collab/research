const express = require("express");

const UmbilicariaSpodochroa1Controller = require("../../controllers/lichMDb/UmbilicariaSpodochroa1Controller.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", UmbilicariaSpodochroa1Controller.addUmbilicariaSpodochroa1);
router.get("/:umbilicariaSpodochroa1Id", UmbilicariaSpodochroa1Controller.getOneUmbilicariaSpodochroa1);
router.get("/", UmbilicariaSpodochroa1Controller.getAllUmbilicariaSpodochroas1);
router.delete("/:umbilicariaSpodochroa1Id", checkAuth, UmbilicariaSpodochroa1Controller.deleteUmbilicariaSpodochroa1);
router.put("/:umbilicariaSpodochroa1Id", checkAuth, UmbilicariaSpodochroa1Controller.updateUmbilicariaSpodochroa1);

module.exports = router;
