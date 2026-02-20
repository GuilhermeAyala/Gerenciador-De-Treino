import Exercicio from "../model/ExercicioModel.js";

function listarExercicios(req, res) {
    res.json(Exercicio.listar());
}

function adicionarExercicios(req, res) {
    const {nome, grupo_muscular, quantidade_series, quantidade_repeticao, peso_carga} = req.body;
    if(!nome || !grupo_muscular ||!quantidade_series || !quantidade_repeticao || !peso_carga){
        return res.status(400).json({message: "Todos os campos são obrigatórios"})
    }

    if(typeof nome !== "string" || typeof grupo_muscular !== "string"){
        return res.status(400).json({error: "O exercicio precisa ser uma string"})
    }

    if(typeof quantidade_series !== "number" || typeof quantidade_repeticao !== "number" || typeof peso_carga !== "number"){
        return res.status(400).json({error: "Esses campos devem ser numeros"})
    }

    if(quantidade_series <= 0 || quantidade_repeticao <= 0 || peso_carga <= 0){
        return res.status(400).json({error: "Series, repetições ou cargas, não podem ser nulas ou negativas"})
    }

    const novo = new Exercicio(nome, quantidade_series, quantidade_repeticao, peso_carga);
    Exercicio.adicionar(novo);
    res.status(201).json({message: "Exercicio cadastrado com sucesso"});
};

export default {listarExercicios, adicionarExercicios};