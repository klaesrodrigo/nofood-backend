'use strick'

function categoriaController(){

}

categoriaController.prototype.get = async (req, res) => {
    res.status(200).send('Funcionando..');
}

categoriaController.prototype.getById = async (req, res) => {
    res.status(200).send(`O id passado foi ${req.params.id}`);
}

categoriaController.prototype.post = async (req, res) => {
    
}

categoriaController.prototype.put = async (req, res) => {

}

categoriaController.prototype.delete = async (req, res) => {

}

module.exports = categoriaController;