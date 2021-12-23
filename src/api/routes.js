const express = require('express');
const routes = express.Router();
const { body } = require('express-validator');

// Controllers
const users = require('../controllers/users');
const beneficios = require('../controllers/beneficios');
const clientes = require('../controllers/clientes');
const beneficiosClientes = require('../controllers/beneficiosClientes');
const beneficiosFuncionarios = require('../controllers/beneficiosFuncionarios');

// Rotas user
routes.get('/funcionarios', users.index);
routes.post('/novoFuncionario', [body('email').isEmail()], users.create);
routes.get('/listarFuncionarios/:id', users.read);
routes.delete('/deletarFuncionario/:id', users.delete);
routes.get('/listarFuncionario/:id', users.readId);


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

// Rotas Benefícios Clientes
routes.get('/beneficiosClientes', beneficiosClientes.index);
routes.post('/novoBeneficiosClientes', beneficiosClientes.create);
routes.get('/listarBeneficiosClientes/:id', beneficiosClientes.read);
routes.delete('/deletarBeneficiosClientes/:id', beneficiosClientes.delete);

// Rotas Benefícios dos Funcionarios
routes.get('/beneficiosFuncionarios', beneficiosFuncionarios.index);
routes.post('/novoBeneficioFuncionario', beneficiosFuncionarios.create);
routes.get('/listarBeneficiosFuncionario/:id', beneficiosFuncionarios.read);
routes.delete('/deletarBeneficioFuncionario/:id', beneficiosFuncionarios.delete);





module.exports = routes;