'use strick'

const routes = require("express").Router();
const controller = require("../controllers/categoria-controller");

let _ctrl = new controller();

routes.get('/', _ctrl.get);
routes.get('/:id', _ctrl.getById);
routes.post('/', _ctrl.post);
routes.put('/:id', _ctrl.put);
routes.delete('/:id', _ctrl.delete);

module.exports = app => app.use('/categorias', routes);