const express = require("express");
const Controller = require("../../controllers/trichoderma/TrichodermaAlbumController.js");
const checkAuth = require("../../middlewares/check-auth.js");

const router = express.Router();

router.post("/", Controller.addTrichodermaAlbum);
router.get("/:trichodermaAlbumId", Controller.getOneTrichodermaAlbum);
router.get("/", Controller.getAllTrichodermaAlbums);
router.delete("/:trichodermaAlbumId", checkAuth, Controller.deleteTrichodermaAlbum);
router.put("/:trichodermaAlbumId", checkAuth, Controller.updateTrichodermaAlbum);

module.exports = router;
