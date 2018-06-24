const configDB = require('../../config/config_DB');

module.exports.get = async function () {

   

    //monta a consulta
    let script = `SELECT *
                  FROM VW_PORTAL_QUANTIDADE (NOLOCK)`;

    
    let resultado = await configDB.executaScriptSQL(script);
    return resultado;
};