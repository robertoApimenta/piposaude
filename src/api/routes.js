const express = require('express');
const routes = express.Router();
const { body } = require('express-validator');

// Controllers
const users = require('../controllers/users');
const beneficios = require('../controllers/beneficios');

// Rotas user
routes.get('/funcionarios', users.index);
routes.post('/novoFuncionario', [body('email').isEmail()], users.create);

// Rotas user
routes.get('/beneficios', beneficios.index);
routes.post('/novoBeneficio', beneficios.create);
routes.get('/listarBeneficios', beneficios.read);
routes.get('/listarBeneficio/:id', beneficios.readId);
routes.put('/editarBeneficio/:id', beneficios.update);
routes.delete('/deletarBeneficio/:id', beneficios.delete);

module.exports = routes;