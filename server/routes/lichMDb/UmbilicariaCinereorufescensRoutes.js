const express = require("express");

const UmbilicariaCinereorufescensController = require("../../controllers/lichMDb/UmbilicariaCinereorufescensController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", UmbilicariaCinereorufescensController.addUmbilicariaCinereorufescens);
router.get("/:umbilicariaCinereorufescensId", UmbilicariaCinereorufescensController.getOneUmbilicariaCinereorufescens);
router.get("/", UmbilicariaCinereorufescensController.getAllUmbilicariaCinereorufescenss);
router.delete("/:umbilicariaCinereorufescensId", checkAuth, UmbilicariaCinereorufescensController.deleteUmbilicariaCinereorufescens);
router.put("/:umbilicariaCinereorufescensId", checkAuth, UmbilicariaCinereorufescensController.updateUmbilicariaCinereorufescens);

module.exports = router;
