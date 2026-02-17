import express from 'express';
import exercicioController from "../controllers/ExercicioController.js";

const router = express.Router();

router.get("/", exercicioController.listarExercicios);
router.post("/", exercicioController.adicionarExercicios);

export default router;