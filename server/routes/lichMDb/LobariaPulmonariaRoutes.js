const express = require("express");

const LobariaPulmonariaController = require("../../controllers/lichMDb/LobariaPulmonariaController.js");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();

router.post("/", LobariaPulmonariaController.addLobariaPulmonaria);
router.get("/:lobariaPulmonariaId", LobariaPulmonariaController.getOneLobariaPulmonaria);
router.get("/", LobariaPulmonariaController.getAllLobariaPulmonarias);
router.delete("/:lobariaPulmonariaId", checkAuth, LobariaPulmonariaController.deleteLobariaPulmonaria);
router.put("/:lobariaPulmonariaId", checkAuth, LobariaPulmonariaController.updateLobariaPulmonaria);

module.exports = router;
