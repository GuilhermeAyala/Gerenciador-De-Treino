const Exercicio = require("../model/ExercicioModel");

exports.listarExercicios = (req, res) => {
    res.json(Exercicio.listar());
}

exports.adicionarExercicios = (req, res) => {
    const {nome, quantidade_series, quantidade_repeticao, peso_carga} = req.body;
    const novo = new Exercicio(nome, quantidade_series, quantidade_repeticao, peso_carga);
    Exercicio.adicionar(novo);
    res.status(201).json({message: "Exercicio cadastrado com sucesso"});
};