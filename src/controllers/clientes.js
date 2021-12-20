const clientes = require('../models/clientes');

module.exports = {
    index(req, res) {
        res.json({
            mensagem: 'Controler dos clientes',
        });
    },

    async create(req, res) {
        const { razaoSocial, cnpj } = req.body;
        if (!razaoSocial || !cnpj) {
            return res.status(400).json({
                mensagem: 'Dados inválidos, tente novamente.'
            });
        }
        await clientes.findOne({ razaoSocial }).then((dados) => {
            if (!dados) {
                clientes.create({ razaoSocial, cnpj });
                return res.status(201).json({ mensagem: `Cliente ${razaoSocial} cadastrado com sucesso` });
            }
            return res.status(409).json({ mensagem: 'Cliente já registrado' });
        });
    },

    async read(req, res) {
        await clientes.find().then((clientes) => res.status(200).json(clientes))
            .catch((err) => res.status(400).json(err));
    },

    async readId(req, res) {
        try {
            const cliente = await clientes.findById(req.params.id);
            if (!cliente) {
                return res.status(404).json({
                    message: 'Cliente não encontrado',
                });
            }
            return res.status(200).json(
                cliente,
            );
        } catch (err) {
            return res.status(404).json({
                message: 'Cliente não encontrado',
            });
        }
    },

    async update(req, res) {
        const { razaoSocial, cnpj } = req.body;
        if (!razaoSocial || !cnpj) {
            return res.status(400).json({
                mensagem: 'Dados inválidos, tente novamente.'
            });
        }

        try {
            const cliente = await clientes.findById(req.params.id);
            const update = { razaoSocial, cnpj };
            await clientes.findByIdAndUpdate(req.params.id, update, {
                new: true,
            });
            return res.status(200).json({ mensagem: `Cliente: ${razaoSocial}, editado com sucesso` });
        } catch (err) {
            return res.status(404).json({
                message: 'Cliente não encontrado',
            });
        }
    },

    async delete(req, res) {
        try {
            const cliente = await clientes.findById(req.params.id);
            if (!cliente) {
                return res.status(404).json({
                    message: 'Cliente não encontrado',
                });
            }
            await clientes.findOneAndRemove({_id: req.params.id });
            return res.status(200).json({
                message: `Cliente ${cliente.razaoSocial} deletado.`,
            });
        } catch (err) {
            return res.status(404).json({
                message: 'Cliente não encontrado',
            });
        }
    },
}