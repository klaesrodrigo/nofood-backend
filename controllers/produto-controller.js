'use strick'

class ProdutoController{

    constructor(){}

    async get(req, res) {
        res.status(200).send('Funcionando..');
    }

    async getById(req, res){
        res.status(200).send(`O id passado foi ${req.params.id}`);
    }

    async post(req, res) {
        
    }

    async put(req, res) {

    }

    async delete(req, res) {

    }
}
module.exports = ProdutoController;