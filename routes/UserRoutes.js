import express from 'express';
import UserController from '../controllers/UserController.js';

const router = express.Router();

router.get("/", UserController.listarUsuarios);
router.post("/", UserController.criarUsuario);
router.put("/:id", UserController.editarUsuario);
router.delete("/:id", UserController.deletarUsuario);

export default router;