require('../models/produto-model');
const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

class produtoRepository {

    constructor(){}

    async create(data){
        let produto = new Produto(data);
        return await produto.save();   
    }


    async find(){
        return await Produto.find();
    }

    async findById(id){
        return await Produto.findById(id);
    }

    async update(id, data){
        await Produto.findByIdAndUpdate(id, {$set: data});
        return await Produto.findById(id);
    }

    async delete(id){
        let produto = await Produto.findById(id);
        await Produto.findByIdAndRemove(id);
        return produto;
    }
}