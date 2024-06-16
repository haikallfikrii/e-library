const express = require("express");
const router = express.Router();
const kelasController = require("../controllers/kelasController");
const auth = require("../middlewares/auth");

router.get("/", auth, kelasController.getAllKelas);

module.exports = router;
