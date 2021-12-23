const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    idFuncionario: {
        type: String,
        required: true
    },
    idBeneficio: {
        type: String,
        required: false
    },
    dataAdmissao: {
        type: String,
        required: false
    },
    endereco: {
        type: String,
        required: false
    },
    peso: {
        type: String,
        required: false
    },
    altura: {
        type: String,
        required: false
    },
    horas: {
        type: String,
        required: false
    },
});

const beneficiosFuncionarios = mongoose.model('beneficiosFuncionarios', DataSchema);

module.exports = beneficiosFuncionarios;