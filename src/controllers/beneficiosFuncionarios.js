const beneficiosFuncionarios = require('../models/beneficiosFuncionarios');

module.exports = {
    index(req, res) {
        res.json({
            mensagem: 'Controler dos benefícios dos funcionarios',
        });
    },
    async create(req, res) {
        const { 
            idFuncionario, 
            idBeneficio, 
            dataAdmissao,
            endereco,
            peso,
            altura,
            horas
        } = req.body;
        if (!idFuncionario || !idBeneficio) {
            return res.status(400).json({
                mensagem: 'Dados inválidos, tente novamente.'
            });
        }
        await beneficiosFuncionarios.findOne({ idFuncionario, idBeneficio }).then((dados) => {
            if (!dados) {
                beneficiosFuncionarios.create({ 
                    idFuncionario, 
                    idBeneficio, 
                    dataAdmissao,
                    endereco,
                    peso,
                    altura,
                    horas 
                });
                return res.status(201).json({ mensagem: `Registrado com sucesso` });
            }
            return res.status(409).json({ mensagem: 'Benefíco já registrado' });
        });
    },
    async read(req, res) {
        const id = req.params.id;
        const beneficios = await beneficiosFuncionarios.find({ idFuncionario: id });
        return res.status(201).json( beneficios );
    },
    async delete(req, res) {
        try {
            await beneficiosFuncionarios.findOneAndRemove({_id: req.params.id });
            return res.status(200).json({
                message: 'Benefício removido.',
            });
        } catch (err) {
            return res.status(404).json({
                message: 'Erro ao remover.',
            });
        }
    },
}