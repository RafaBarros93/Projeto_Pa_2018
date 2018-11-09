let sql = require('mssql');
const {user,password,server,database,port} = require('../environment/env.json');


//monta a string de conexao
let conexao = {
    user,
    password,
    server,
    database,
    port
};
//exporta a string de conexao caso seja necessaria
module.exports.stringConexao = conexao;

module.exports.executaScriptSQL = async function(query){

    //arquivo de retorno padrao de execucao dos scripts SQL
    let retorno = {
        result: null,
        erro: null,
        linhasAfetadas: null
    };
    //cria o pool de conexao com o BD
    
    let pool = new sql.ConnectionPool(conexao);
    pool.on('err', err => {
        console.log('Falha ao conectar-se ao banco de dados. ' + err);
    });
    //Realiza a conexao e a execucao do script
    try {
        await pool.connect();
        let result = await pool.request().query(query);
        retorno.result = result.recordset;
        retorno.linhasAfetadas = result.rowsAffected;
        return retorno;
    } catch (err) {
       console.log(err);
        retorno.erro = err;
        return retorno;
    } finally {
        pool.close();
    }
}
