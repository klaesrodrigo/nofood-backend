"use strict";
require("../models/categoria-model");
const repository = require("../repositories/categoria-repository");

class CategoriaController {
  constructor() {}

  async post(req, res) {
    let result = await new repository().create(req.body);
    res.status(201).send(result);
  }

  async put(req, res) {
    let result = await new repository().update(req.params.id, req.body);
    res.status(202).send(result);
  }

  async get(req, res) {
    let result = await new repository().find();
    res.status(200).send(result);
  }

  async getById(req, res) {
    let result = await new repository().findById(req.params.id);
    res.status(200).send(result);
  }

  async delete(req, res) {
    let obj = new repository();
    let result = await obj.findById(req.params.id);
    obj.delete(req.params.id);
    res.status(200).send(result);
  }
}
module.exports = CategoriaController;
