const beneficiosClientes = require('../models/beneficiosClientes');

module.exports = {
    index(req, res) {
        res.json({
            mensagem: 'Controler dos benefícios dos clientes',
        });
    },

    async create(req, res) {
        const { idCliente, idBeneficio} = req.body;
        if (!idCliente || !idBeneficio) {
            return res.status(400).json({
                mensagem: 'Dados inválidos, tente novamente.'
            });
        }
        await beneficiosClientes.findOne({ idCliente, idBeneficio }).then((dados) => {
            if (!dados) {
                beneficiosClientes.create({ idCliente, idBeneficio });
                return res.status(201).json({ mensagem: `Adicionado com sucesso` });
            }
            return res.status(409).json({ mensagem: 'Cliente já registrado' });
        });
    },
    async read(req, res) {
        const id = req.params.id;
        const beneficios = await beneficiosClientes.find({ idCliente: id });
        return res.status(201).json( beneficios );
    },
    async delete(req, res) {
        try {
            await beneficiosClientes.findOneAndRemove({_id: req.params.id });
            return res.status(200).json({
                message: 'Benefício removido deletado.',
            });
        } catch (err) {
            return res.status(404).json({
                message: 'Erro ao remover.',
            });
        }
    },
}