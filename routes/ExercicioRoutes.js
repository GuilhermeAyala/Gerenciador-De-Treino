const express = require("express");
const router = express.Router();
const exercicioController = require("../controllers/ExercicioController");

router.get("/exercicios", exercicioController.listarExercicios);
router.post("/exercicios", exercicioController.adicionarExercicios);

module.exports = router;