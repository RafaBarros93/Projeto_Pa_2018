const quantiade = require('../models/quantidade_visitas');
const resposta = require('../../config/rotinas');

module.exports.get = async function(req, res){
    let retorno = await quantiade.get();
    resposta.montaRetorno(retorno, req, res);
}