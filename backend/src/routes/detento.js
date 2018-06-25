const rotas = require('../../config/routes');
const detento = require('../controllers/detento');

module.exports = function(){

     rotas.get('/detento', function(req, res){
        detento.get(req, res);
     });

}