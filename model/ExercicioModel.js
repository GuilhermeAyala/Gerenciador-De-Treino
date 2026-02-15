let exercicios = [];

export class Exercicio {
    constructor(nome, quantidade_series, quantidade_repeticao, peso_carga){
        this.nome = nome;
        this.quantidade_series = quantidade_series;
        this.quantidade_repeticaoo = quantidade_repeticao;
        this.peso_carga = peso_carga;
    }

    listar() {
        return exercicios;
    }

    adicionar(exercicios){
        exercicios.push(Exercicio);
    }

}
