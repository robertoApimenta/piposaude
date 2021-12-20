const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    idCliente: {
        type: String,
        required: true
    },
    idBeneficio: {
        type: String,
        required: false
    },
});

const beneficiosClientes = mongoose.model('beneficiosClientes', DataSchema);

module.exports = beneficiosClientes;