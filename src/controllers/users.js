const users = require('../models/users');
const { validationResult } = require('express-validator');

module.exports = {
    index(req, res) {
        response.json({
            mensagem: 'Controler do usuário'
        })
    },

    async create(req, res) {
        const errors = validationResult(req);
        const { nome, cpf, dataAdmissao, email, endereco, peso, altura, horasMeditadas } = req.body;
        if(!errors.isEmpty() || !nome || !cpf || !dataAdmissao || !email || !endereco || !peso || !altura || !horasMeditadas ){
            return res.status(400).json({
                message: 'Dados inválidos, tente novamente.'
            })
        }
        let user = await users.findOne({ email });
        if (!user) {
            user = { nome, cpf, dataAdmissao, email, endereco, peso, altura, horasMeditadas }
            await users.create(user)
            return res.status(201).json({
                user
            })
        } else {
            return res.status(409).json({
                message: 'Email already registered'
            })
        }
    },
}