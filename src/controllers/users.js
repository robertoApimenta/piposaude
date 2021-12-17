const users = require('../models/users');
const { validationResult } = require('express-validator');

module.exports = {
    index(req, res) {
        res.json({
            mensagem: 'Controler do usuário'
        })
    },

    async create(req, res) {
        const errors = validationResult(req);
        const { nome, cpf, dataAdmissao, email, endereco, peso, altura, horasMeditadas } = req.body;
        if (!errors.isEmpty() || !nome || !cpf || !dataAdmissao || !email || !endereco || !peso || !altura || !horasMeditadas) {
            return res.status(400).json({
                mensagem: 'Dados inválidos, tente novamente.'
            });
        }
        await users.findOne({ email }).then((dados) => {
            if (!dados) {
                users.create({ nome, cpf, dataAdmissao, email, endereco, peso, altura, horasMeditadas });
                return res.status(201).json({ mensagem: `Usuário ${nome} cadastrado com sucesso` });
            }
            return res.status(409).json({ mensagem: 'Email já registrado' });
        });
    },
}