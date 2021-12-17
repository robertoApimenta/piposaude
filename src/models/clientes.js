const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    razaoSocial: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: false
    },
});

const clientes = mongoose.model('clientes', DataSchema);

module.exports = clientes;