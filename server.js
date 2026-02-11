import { Exercicio } from 'exercicio.js'

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Teste")
})

app.get('/home', (req, res) => {
    res.send("Você está na Home")
})

app.listen(port, () => {
    console.log(`Acessando a porta ${port}`);
})