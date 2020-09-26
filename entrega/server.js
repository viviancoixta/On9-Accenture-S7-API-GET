const { response } = require('express');
const express = require('express');
const app = express();
const porta = 3000;
const women = require('./women.json')

app.use(express.json());

//[GET] http://localhost:3000/women
app.get('/women', function(request, response) {
    response.json(women);
});

app.listen(porta, function() {
    console.log("tudo certo, nada errado.")
});