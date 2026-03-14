let exercicios = [];

class Exercicio {
    constructor(id, nome, grupo_muscular, quantidade_series, quantidade_repeticao, peso_carga){
        this.id = id;
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

    static editar(nome, grupo_muscular, quantidade_series, quantidade_repeticao, peso_carga){
        const {nome, grupo_muscular, quantidade_series, quantidade_repeticao, peso_carga} = req.body;

        const index = exercicios.findIndex(u => String(u.id) === String(id));
        if(index === -1){ return null};

        exercicios[index] = {...exercicios[index], nome, grupo_muscular, quantidade_series, quantidade_repeticao, peso_carga};
        return exercicios[index];
    }

    static filtrarPorGrupoMuscular(grupo_muscular){
        return exercicios.filter(exercicio => 
            exercicio.grupo_muscular.toLowerCase() === grupo_muscular.toLowerCase()
        );
    }

}

export default Exercicio;