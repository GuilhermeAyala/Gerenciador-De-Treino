import * as Exercicio from "../service/ExercicioService.js";
import type { Request, Response } from "express";

export async function listarExercicios(req: Request, res: Response) {
    const exercicios = await Exercicio.listarExercicio();
    res.json(exercicios);
}

export async function adicionarExercicios(req: Request, res: Response) {
    const { nome, grupo_muscular} = req.body;
    if(!nome || !grupo_muscular){
        return res.status(400).json({message: "Todos os campos são obrigatórios"})
    }

    if(typeof nome !== "string" || typeof grupo_muscular !== "string"){
        return res.status(400).json({error: "O exercicio precisa ser uma string"})
    }

    const novo = await Exercicio.criarExercicio(nome, grupo_muscular);
    return res.status(201).json({message: "Exercicio cadastrado com sucesso", novo});
};

export async function editarExercicio(req: Request, res: Response){//metodo put
    const { id } = req.params;
    const {nome, grupo_muscular} = req.body;

    try{
        const atualizado = await Exercicio.editarExercicio(Number(id), {nome, grupo_muscular});
        return res.json(atualizado)
    } catch {
        return res.status(404).json({message: "Exercicio não encontrado"})
    }
}

export async function filtrarExercicios(req: Request, res: Response){
    const grupo_muscular  = String(req.params.grupo_muscular);

    if(!grupo_muscular){
        return res.status(400).json({message: "Grupo muscular obrigatório"});
    }

    const resultado = await Exercicio.filtrarPorGrupoMuscular(grupo_muscular);

    if(resultado.length === 0){
        return res.status(404).json({message: "Nenhum exericio encontrado para esse grupo muscular"})
    }

   return res.json(resultado);
}

export async function excluirExercicio(req: Request, res: Response){
    const { id } = req.params;

    try{
        await Exercicio.excluirExercicio(Number(id));
        return res.status(200).json({message: "Exercicio deletado"});
    }
    catch{
        return res.status(404).json({message: "Exercicio não encontrado"});
    }

}

export default {listarExercicios, adicionarExercicios, editarExercicio, filtrarExercicios, excluirExercicio};