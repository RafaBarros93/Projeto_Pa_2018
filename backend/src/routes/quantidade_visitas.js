const rotas = require('../../config/routes');
const quantiade = require('../controllers/quantidade_visitas');

module.exports = function(){

     rotas.get('/quantidade', function(req, res){
        quantiade.get(req, res);
     });

}