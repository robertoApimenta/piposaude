const users = require('../models/users');
const beneficiosClientes = require('../models/beneficiosClientes');
const { validationResult } = require('express-validator');

module.exports = {
    index(req, res) {
        res.json({
            mensagem: 'Controler do usuário'
        })
    },

    async create(req, res) {
        const errors = validationResult(req);
        const { id, nome, cpf, email } = req.body;
        const idEmpresa = id;
        if (!errors.isEmpty() || !nome || !cpf || !email) {
            return res.json({
                erro: true,
                mensagem: 'Dados inválidos, tente novamente.'
            });
        }
        const usuario = await users.findOne({ cpf });
        if (!usuario) {
            await users.create({ idEmpresa, nome, cpf, email });
            return res.status(201).json({
                erro: false,
                mensagem: `Funcionario ${nome} cadastrado com sucesso`
            });
        }
        return res.json({
            erro: true,
            mensagem: 'CPF já cadastrado'
        })
    },
    async read(req, res) {
        const id = req.params.id;
        const usuarios = await users.find({ idEmpresa: id });
        return res.json({
            usuarios
        })
    },
    async delete(req, res) {
        const funcionario = await users.findOneAndRemove({ _id: req.params.id });
        return res.status(200).json({
            message: `Funcionário ${funcionario.nome} deletado.`,
        });
    },
    async readId(req, res) {
        try {
            const funcionario = await users.findById(req.params.id);           
            const beneficios = await beneficiosClientes.find({ idCliente: funcionario.idEmpresa });
            return res.status(200).json({
                funcionario,
                beneficios
            });
        } catch (err) {
            return res.status(404).json({
                message: 'Funcionario não encontrado',
            });
        }
    },
}