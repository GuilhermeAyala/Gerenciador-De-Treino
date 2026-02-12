import { randomUUID } from 'crypto';

export class BancoDeExercicios{
    exercicios = new Map();

    list(){
        return Array.from(this.exercicios.values());
    }

    create(exercicio){
        const exercicioId = randomUUID();
        this.exercicios.set(exercicioId, exercicio);
    }

    update(id, exercicio){
        this.exercicio.set(id, exercicio);
    }

    delete(id){
        this.exercicios.delete(id);
    }
}