const express = require('express');
const routes = express.Router();

const PessoaController = require('../controllers/pessoaController');

routes.get('/pessoa', PessoaController.index);
routes.get('/pessoa/:id', PessoaController.show);
routes.post('/pessoa', PessoaController.store);
routes.delete('/pessoa/:id', PessoaController.destroy);
routes.put('/pessoa/:id', PessoaController.update);

const UsuarioController = require('../controllers/usuarioController');

routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.show);
routes.post('/usuario', UsuarioController.store);
routes.delete('/usuario/:id', UsuarioController.destroy);
routes.put('/usuario/:id', UsuarioController.update);

module.exports = routes;