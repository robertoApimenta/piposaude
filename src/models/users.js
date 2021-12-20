const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    idEmpresa: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
})

const users = mongoose.model('users', DataSchema)

module.exports = users