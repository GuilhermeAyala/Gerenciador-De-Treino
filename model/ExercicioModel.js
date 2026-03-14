let exercicios = [];
let proximoId = 0;

class Exercicio {
    constructor(nome, grupo_muscular, quantidade_series, quantidade_repeticao, peso_carga){
        this.id = proximoId++;
        this.nome = nome;
        this.grupo_muscular = grupo_muscular;
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

    static editar(id, nome, grupo_muscular, quantidade_series, quantidade_repeticao, peso_carga){

        const index = exercicios.findIndex(e => String(e.id) === String(id));
        if(index === -1){ return null};

        exercicios[index] = {...exercicios[index], nome, grupo_muscular, quantidade_series, quantidade_repeticao, peso_carga};
        return exercicios[index];
    }

    static filtrarPorGrupoMuscular(grupo_muscular){
        return exercicios.filter(exercicio => 
            exercicio.grupo_muscular.toLowerCase() === grupo_muscular.toLowerCase()
        );
    }

    static excluir(id){
        exercicios = exercicios.filter(exercicio => String(exercicio.id) !== String(id));
    }

}

export default Exercicio;