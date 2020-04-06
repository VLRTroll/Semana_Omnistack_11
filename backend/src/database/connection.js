const knex = require("knex");
const configuration = require("../../knexfile");

//Acessa a variável de ambiente criada pelo cross-env
const config =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development;

const connection = knex(config);
module.exports = connection;
