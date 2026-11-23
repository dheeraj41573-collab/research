const express = require("express");
const router = express.Router();
const {
  getPharmacologicalTableGmdb,
  getPharmacologicalTableGmdbById,
  createPharmacologicalTableGmdb,
  updatePharmacologicalTableGmdb,
  deletePharmacologicalTableGmdb,
  seedPharmacologicalTableGmdb,
} = require("../../controllers/gmdb/PharmacologicalTableGMDBController");

router.get("/", getPharmacologicalTableGmdb);
router.get("/:id", getPharmacologicalTableGmdbById);
router.post("/", createPharmacologicalTableGmdb);
router.put("/:id", updatePharmacologicalTableGmdb);
router.delete("/:id", deletePharmacologicalTableGmdb);
router.post("/seed", seedPharmacologicalTableGmdb);

module.exports = router;
