const rotas = require('../../config/routes');
const chamado = require('../controllers/cadastro_visita');

module.exports = function(){

     rotas.get('/cadastro/:id', function(req, res){
        chamado.get(req.params.id, req, res);
     });
 
     rotas.get('/cadastro', function(req, res){
        chamado.get(null, req, res);
     });
 
     rotas.post('/cadastro', function(req, res){
        chamado.post(req.body, req, res);
     });
 
     rotas.put('/cadastro', function(req, res){
        chamado.put(req.body, req, res);
     });
 
     rotas.delete('/cadastro/:id', function(req, res){
        chamado.delete(req.params.id, req, res);
     });   
}