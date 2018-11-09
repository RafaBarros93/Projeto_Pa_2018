const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const consign = require('consign');

const server = express();
const routers = require('./routes');

//configura os middlewares
server.use(compression());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use('/portal_infopen', routers);

consign()
    .include('src/routes')
    .into(server);

//define a porta em que o servico ira rodar
const porta = 3004;

//sobe o servidor
server.listen(porta, function(){
    console.log(`Portal Infopen rodando na porta http://localhost:${porta}`);
});