import express from 'express';
import * as exercicioController from "../controllers/ExercicioController.js";

const router = express.Router();

router.get("/", exercicioController.listarExercicios);
router.post("/", exercicioController.adicionarExercicios);
router.put("/:id", exercicioController.editarExercicio);
router.delete("/:id", exercicioController.excluirExercicio);

router.get("/grupo/:grupo_muscular", exercicioController.filtrarExercicios);

export default router;