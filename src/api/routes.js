const express = require('express');
const routes = express.Router();
const { body } = require('express-validator');

// Controllers
const users = require('../controllers/users');
const beneficios = require('../controllers/beneficios');
const clientes = require('../controllers/clientes');

// Rotas user
routes.get('/funcionarios', users.index);
routes.post('/novoFuncionario', [body('email').isEmail()], users.create);

// Rotas benefícios
routes.get('/beneficios', beneficios.index);
routes.post('/novoBeneficio', beneficios.create);
routes.get('/listarBeneficios', beneficios.read);
routes.get('/listarBeneficio/:id', beneficios.readId);
routes.put('/editarBeneficio/:id', beneficios.update);
routes.delete('/deletarBeneficio/:id', beneficios.delete);

// Rotas Clientes
routes.get('/clientes', clientes.index);
routes.post('/novoCliente', clientes.create);
routes.get('/listarClientes', clientes.read);
routes.get('/listarCliente/:id', clientes.readId);
routes.put('/editarCliente/:id', clientes.update);
routes.delete('/deletarCliente/:id', clientes.delete);

module.exports = routes;