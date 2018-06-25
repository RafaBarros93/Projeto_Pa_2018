const detento = require('../models/detento');
const resposta = require('../../config/rotinas');

module.exports.get = async function(req, res){
    let retorno = await detento.get();
    resposta.montaRetorno(retorno, req, res);
}