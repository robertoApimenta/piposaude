const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    dataAdmissao: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    peso: {
        type: String,
        required: true
    },
    altura: {
        type: String,
        required: true
    },
    horasMeditadas: {
        type: String,
        required: true
    },
})

const users = mongoose.model('users', DataSchema)

module.exports = users