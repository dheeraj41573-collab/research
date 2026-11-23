const express = require("express");

const UmbilicariaCrustulosaController = require("../../controllers/lichMDb/UmbilicariaCrustulosaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", UmbilicariaCrustulosaController.addUmbilicariaCrustulosa);
router.get("/:umbilicariaCrustulosaId", UmbilicariaCrustulosaController.getOneUmbilicariaCrustulosa);
router.get("/", UmbilicariaCrustulosaController.getAllUmbilicariaCrustulosas);
router.delete("/:umbilicariaCrustulosaId", checkAuth, UmbilicariaCrustulosaController.deleteUmbilicariaCrustulosa);
router.put("/:umbilicariaCrustulosaId", checkAuth, UmbilicariaCrustulosaController.updateUmbilicariaCrustulosa);

module.exports = router;
