import { BancoDeExercicios } from './exercicio.js';
import express from 'express';
const cors = require("cors");

const app = express()
const port = 3000
const exercicioRoutes = require("./routes/ExercicioRoutes.js");

const database = new BancoDeExercicios();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Teste")
})

app.get('/home', (req, res) => {
    res.send("Você está na Home")
})

app.get('/exercicios', exercicioRoutes);

app.get('/teste', (req, res) => {
    res.send("<h4>Exercicios</h4>")
})


app.listen(port, () => {
    console.log(`Acessando a porta ${port}`);
})