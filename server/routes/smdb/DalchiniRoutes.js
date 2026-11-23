const express = require("express");
const DalchiniController = require("../../controllers/smdb/DalchiniController.js")
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", DalchiniController.addDalchini);
router.get("/:dalchiniId", DalchiniController.getOneDalchini);
router.get("/", DalchiniController.getAllDalchini);
router.delete("/:dalchiniId",checkAuth, DalchiniController.deleteDalchini);
router.put("/:dalchiniId",checkAuth, DalchiniController.updateDalchini);

module.exports = router;