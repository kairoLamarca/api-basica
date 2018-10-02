require('dotenv').load();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuração de acesso
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");//permite acesso para qualquer aplicação(dominio)
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");//Configurar metodos que a origem pode requisitar
    res.setHeader("Access-Control-Allow-Headers", "content-type");//Habilitar que a req da origem tenha cabeçalhos reescritos
    res.setHeader("Access-Control-Allow-Credentials", true);//

    next();
})

//Rotas
const index = require('./routes/index');
const mongoRoute = require('./routes/mongoRoute');
app.use('/', index);
app.use('/mongo', mongoRoute);

/* middleware que configura páginas de status */
app.use((req, res, next) => {
    res.status(404).send('Recurso não encontrado');//Envia isso quando der status 404
    next();
})

/* middleware que configura msg de erro internos*/
app.use((err, req, res, next) => {
    res.status(500).send('Ocorreu um erro interno, tente novamente');
    next();
})

module.exports = app;
