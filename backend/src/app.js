const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");

const app = express();

app.use(cors()); //registra endereços válidos de requisições
app.use(express.json()); //informa que o corpo das requisições devem ser parseados para JSON
app.use(routes); //inclui as rotas da nossa aplicação
app.use(errors());

// app.listen(3333);
module.exports = app;
