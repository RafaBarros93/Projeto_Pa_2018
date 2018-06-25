const configDB = require('../../config/config_DB');

module.exports.get = async function (id) {

    let parametro = 'WHERE idAAA = ';

    // prepara  o parametro
    if (id === null)
        parametro = '';
    else
        parametro += id;

    //monta a consulta
    let script = `SELECT *
                  FROM VW_PORTAL_AGENDAMENTO  (NOLOCK) ${parametro}`;

    
    let resultado = await configDB.executaScriptSQL(script);
    return resultado;
};

module.exports.post = async function (chamado) {

    let campos = "";
    let valores = "";

    for (key in chamado) { // obtém as chaves do objeto
        // se o valor for diferente de objeto (caso events)
        if (typeof chamado[key] !== 'object') {
            if (key !== 'idAAA') {
                if (campos === "") {
                    campos += key;
                    valores += "'" + chamado[key] + "'";
                } else {
                    campos += "," + key;
                    valores += ",'" + chamado[key] + "'";
                }
            }
        }
    };

    let script = `INSERT INTO SisAAA (${campos})
                        VALUES (${valores}) SELECT SCOPE_IDENTITY() AS id`;

    console.log(script);
    let resultado = await configDB.executaScriptSQL(script);
    return resultado;
};

module.exports.put = async function (chamado) {

    let valores = "";

    for (key in chamado) { // obtém as chaves do objeto
        // se o valor for diferente de objeto (caso events)
        if (typeof chamado[key] !== 'object') {
            if (key !== 'idAAA') {
                if (valores === "") {
                    valores += key + " ='" + chamado[key] + "'";
                } else {
                    valores += "," + key + " ='" + chamado[key] + "'";
                }
            }
        }
    };

    let script = `UPDATE SisAAA SET ${valores}
                        WHERE idAAA = ${chamado.idAAA}`;

    let resultado = await configDB.executaScriptSQL(script);
    return resultado;
};

module.exports.delete = async function (id) {

    //monta a consulta
    let script = `DELETE FROM SisAAA WHERE idAAA = ${id}`;

    let resultado = await configDB.executaScriptSQL(script);
    return resultado;
};