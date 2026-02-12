import { BancoDeExercicios } from './exercicio.js';
import express from 'express';

const app = express()
const port = 3000

const database = new BancoDeExercicios();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Teste")
})

app.get('/home', (req, res) => {
    res.send("Você está na Home")
})

app.post('/exercicios', (req, res) => {
    const {nome, quantidade_series, quantidade_repeticao, peso_carga} = req.body;

    database.create({
        nome,
        quantidade_series,
        quantidade_repeticao,
        peso_carga,
    })

    return res.status(201).send();
})

app.get('/exercicios', (req, res) => {
    const exercicios = database.list();

    //return exercicios;
    return res.json(exercicios);
})


app.listen(port, () => {
    console.log(`Acessando a porta ${port}`);
})