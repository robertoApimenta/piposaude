const beneficios = require('../models/beneficios');

module.exports = {
    index(req, res) {
        res.json({
            mensagem: 'Controler dos beneficios',
        });
    },

    async create(req, res) {
        const { nome, categoria } = req.body;
        if (!nome || !categoria) {
            return res.status(400).json({
                mensagem: 'Dados inválidos, tente novamente.'
            });
        }
        await beneficios.findOne({ nome }).then((dados) => {
            if (!dados) {
                beneficios.create({ nome, categoria });
                return res.status(201).json({ mensagem: `Benefício ${nome} cadastrado com sucesso` });
            }
            return res.status(409).json({ mensagem: 'Benefício já registrado' });
        });
    },

    async read(req, res) {
        await beneficios.find().then((beneficios) => res.status(200).json(beneficios))
            .catch((err) => res.status(400).json(err));
    },

    async readId(req, res) {
        try {
            const beneficio = await beneficios.findById(req.params.id);
            return res.status(200).json(
                beneficio,
            );
        } catch (err) {
            return res.status(404).json({
                message: 'Benefício não encontrado',
            });
        }
    },

    async update(req, res) {
        const { nome, categoria } = req.body;
        if (!nome || !categoria) {
            return res.status(400).json({
                mensagem: 'Dados inválidos, tente novamente.'
            });
        }
        const id = req.params.id;
        //console.log(id)
        const update = { nome, categoria };
        //console.log(update)
        await beneficios.findByIdAndUpdate(id, update);
        return res.status(200).json({ mensagem: `Benefício: ${nome}, editado com sucesso` });
    },

    async delete(req, res) {
        try {
            const beneficio = await beneficios.findById(req.params.id);
            if (!beneficio) {
                return res.status(404).json({
                    message: 'Cliente não encontrado',
                });
            }
            await beneficios.findOneAndRemove({ _id: req.params.id });
            return res.status(200).json({
                message: `Benefício ${beneficio.nome} deletado.`,
            });
        } catch (err) {
            return res.status(404).json({
                message: 'Cliente não encontrado',
            });
        }
    },
}