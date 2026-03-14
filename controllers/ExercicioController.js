import Exercicio from "../model/ExercicioModel.js";

function listarExercicios(req, res) {
    res.json(Exercicio.listar());
}

function adicionarExercicios(req, res) {
    const {id, nome, grupo_muscular, quantidade_series, quantidade_repeticao, peso_carga} = req.body;
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

    const novo = new Exercicio(nome, grupo_muscular, quantidade_series, quantidade_repeticao, peso_carga);
    Exercicio.adicionar(novo);
    res.status(201).json({message: "Exercicio cadastrado com sucesso"});
};

function editarExercicio(req, res){//metodo put
    const { id } = req.params;
    const {nome, grupo_muscular, quantidade_series, quantidade_repeticao, peso_carga} = req.body;

    const atualizado = Exercicio.editar(id, nome, grupo_muscular, quantidade_series, quantidade_repeticao, peso_carga);

    if(!atualizado){
        return res.status(404).json({message: "Exercicio não encontrado"})
    }

    res.json(atualizado);
}

function filtrarExercicios(req, res){
    const { grupo_muscular } = req.params;
    const resultado = Exericicio.filtrarPorGrupoMuscular(grupo_muscular);

    if(resultado.length === 0){
        return res.status(404).json({message: "Nenhum exericio encontrado para esse grupo muscular"})
    }

    res.json(resultado);
}

function excluirExercicio(req, res){
    const { id } = req.params;

    Exercicio.excluir(id);
    return res.status(201).json({message: "Exercício deletado"});
}


function calculoVolumeRepeticao(exercicio){
    volume = exercicio.quantidade_series * exercicio.quantidade_repeticao * exercicio.peso_carga;
    return volume;
}

function volumeSemanal(exercicio){
    volumeSemanal = exercicio.quantidade_series * exercicio.quantidade_repeticao;
    if(volumeSemanal < 10){
        volumeSemanal = "baixa hipertrofia"
    }
    else if(volumeSemanal >= 10 && volumeSemanal <= 20){
        volumeSemanal = "hipertrofia eficaz"
    }
    else{
        volumeSemanal = "Fadiga muscular"
    }
}

export default {listarExercicios, adicionarExercicios, editarExercicio, filtrarExercicios, excluirExercicio};