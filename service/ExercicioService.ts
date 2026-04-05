import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

    export async function listarExercicio() {
        return await prisma.exercicio.findMany()
    } 

    export async function criarExercicio(nome: string, grupo_muscular: string){
        return await prisma.exercicio.create({
            data: {
                nome, grupo_muscular
            }
        })
    }

    export async function editarExercicio(id: number, dados: object){
        return await prisma.exercicio.update({
            where: {id}, data: dados
        })
    }

    export async function filtrarPorGrupoMuscular(grupo_muscular: string){
        return await prisma.exercicio.findMany({
            where: {
                grupo_muscular: {
                    equals: grupo_muscular,
                    mode: 'insensitive'
                }
            }
        }) 
    }

    export async function excluirExercicio(id: number){
        return await prisma.exercicio.delete({
            where: {id}
        })
    }

    export function calculoVolumeRepeticao(quantidade_repeticao: number, quantidade_series: number, peso_carga: number){
        let QtdVolume: number;
        let statusVolume: string;
        QtdVolume = quantidade_series * quantidade_repeticao * peso_carga;
            if(QtdVolume < 10){
                statusVolume = "baixa hipertrofia"
            }
            else if(QtdVolume >= 10 && QtdVolume<= 20){
                statusVolume = "hipertrofia eficaz"
            }
            else{
                statusVolume = "Fadiga muscular"
            }
    }