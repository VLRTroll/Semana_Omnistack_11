const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //registra endereços válidos de requisições
app.use(express.json()); //informa que o corpo das requisições devem ser parseados para JSON
app.use(routes);

app.listen(3333);
