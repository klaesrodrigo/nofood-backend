require("../models/categoria-model");

const mongoose = require("mongoose");
const Categoria = mongoose.model("Categoria");

class CategoriaRepository {
  constructor() {}

  async create(data) {
    let categoria = new Categoria(data);
    return await categoria.save();
  }

  async update(id, data) {
    await Categoria.findByIdAndUpdate(id, { $set: data });
    return await Categoria.findById(id);
  }

  async find(){
      return await Categoria.find();
  }

  async findById(id){
      return await Categoria.findById(id);
  }

  async delete(id){
        return await Categoria.findByIdAndRemove(id);
  }
}

module.exports = CategoriaRepository;