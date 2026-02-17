import { BancoDeExercicios } from './exercicio.js';
import express from 'express';
import exercicioRoutes from './routes/ExercicioRoutes.js';

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

app.use('/exercicios', exercicioRoutes);

app.listen(port, () => {
    console.log(`Acessando a porta ${port}`);
})