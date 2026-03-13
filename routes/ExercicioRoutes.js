import express from 'express';
import exercicioController from "../controllers/ExercicioController.js";

const router = express.Router();

router.get("/", exercicioController.listarExercicios);
router.post("/", exercicioController.adicionarExercicios);

router.get("/grupo/:grupo_muscular", exercicioController.filtrarExercicios);

export default router;