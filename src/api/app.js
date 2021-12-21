require('dotenv').config;

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(routes);

const uri = 'mongodb+srv://roberto:PGupFSoeUpiXyKS2@cluster0.ynjbf.mongodb.net/pipo?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true
}).then(() => {
    console.log('Conectado ao banco de dados');
}).catch(err => {
    console.log(`Erro ao tentar conxão com o banco de dados ${err}`);
});

app.listen(PORT, ()  => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});