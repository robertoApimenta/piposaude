const express = require('express');
const routes = express.Router();
const { body } = require('express-validator');

// Controllers
const user = require('../controllers/users');

// Rotas user
routes.get('/', user.index);
routes.post('/novoFuncionario', [body('email').isEmail()], user.create);

module.exports = routes;