const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => res.send(`<h1>Executando na porta ${PORT}!</h1>`));
app.get('/olamundo', (_req, res) => res.send('Olá Mundo'));

app.listen(PORT);
