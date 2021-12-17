const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: false
    },
})

const beneficios = mongoose.model('beneficios', DataSchema)

module.exports = beneficios