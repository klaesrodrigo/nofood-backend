'use strict'
require('../models/categoria-model');
const repository = require('../repositories/categoria-repository')

function CategoriaController() {

}

CategoriaController.prototype.post = async (req, res) => {
    let result = await new repository().create(req.body)
    res.status(201).send(result);
};

CategoriaController.prototype.put = async (req, res) => {
    let result = await new repository().update(req.params.id, req.body);
    res.status(202).send(result);
};

CategoriaController.prototype.get = async (req, res) => {
    let result = await new repository().find();
    res.status(200).send(result);
};

CategoriaController.prototype.getById = async (req, res) => {
    let result = await new repository().findById(req.params.id);
    res.status(200).send(result);
};

CategoriaController.prototype.delete = async (req, res) => {
    let obj = new repository();
    let result = await obj.findById(req.params.id);
    obj.delete(req.params.id);    
    res.status(200).send(result);
};

module.exports = CategoriaController;