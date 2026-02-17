let exercicios = [];

class Exercicio {
    constructor(nome, quantidade_series, quantidade_repeticao, peso_carga){
        this.nome = nome;
        this.quantidade_series = quantidade_series;
        this.quantidade_repeticao = quantidade_repeticao;
        this.peso_carga = peso_carga;
    }

    static listar() {
        return exercicios;
    }

    static adicionar(exercicio){
        exercicios.push(exercicio);
    }

}

export default Exercicio;