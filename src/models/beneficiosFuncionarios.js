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
});

const beneficiosFuncionarios = mongoose.model('beneficiosFuncionarios', DataSchema);

module.exports = beneficiosFuncionarios;