const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { process_params } = require('express/lib/router');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/pipo', {
    useNewUrlParser: true,
}).then(() => {
    console.log('Conectado ao banco de dados');
}).catch(err => {
    console.log(`Erro ao tentar conxão com o banco de dados ${err}`);
});


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ mensagem: 'Rota / get no backend' });
});

app.listen(PORT, ()  => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});