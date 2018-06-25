const rotas = require('../../config/routes');
const cadastro = require('../controllers/cadastro_visita');

module.exports = function(){

     rotas.get('/cadastro/:id', function(req, res){
        cadastro.get(req.params.id, req, res);
     });
 
     rotas.get('/cadastro', function(req, res){
        cadastro.get(null, req, res);
     });
 
     rotas.post('/cadastro', function(req, res){
        cadastro.post(req.body, req, res);
     });
 
     rotas.put('/cadastro', function(req, res){
        cadastro.put(req.body, req, res);
     });
 
     rotas.delete('/cadastro/:id', function(req, res){
        cadastro.delete(req.params.id, req, res);
     });   
}