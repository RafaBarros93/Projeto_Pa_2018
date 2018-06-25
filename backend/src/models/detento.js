const configDB = require('../../config/config_DB');

module.exports.get = async function () {

   

    //monta a consulta
    let script = `SELECT idDetento,nomeDetento FROM Detentos(NOLOCK)`;

    
    let resultado = await configDB.executaScriptSQL(script);
    return resultado;
};