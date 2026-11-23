const express = require("express");
const router = express.Router();
const {
  getPharmacologicalTableLichMDb,
  getPharmacologicalTableLichMDbById,
  createPharmacologicalTableLichMDb,
  updatePharmacologicalTableLichMDb,
  deletePharmacologicalTableLichMDb,
  seedPharmacologicalTableLichMDb,
} = require("../../controllers/lichMDb/PharmacologicalTableLichMDbController");

// GET all data
router.get("/", getPharmacologicalTableLichMDb);

// GET data by ID
router.get("/:id", getPharmacologicalTableLichMDbById);

// POST create new data
router.post("/", createPharmacologicalTableLichMDb);

// PUT update data
router.put("/:id", updatePharmacologicalTableLichMDb);

// DELETE data
router.delete("/:id", deletePharmacologicalTableLichMDb);

// POST seed data from JSON
router.post("/seed", seedPharmacologicalTableLichMDb);

module.exports = router;
