const express = require('express');
const routes = require('./routes');

const app = express();

//informa que o corpo das requisições devem ser parseados para JSON
app.use(express.json());
app.use(routes);

app.listen(3333);
