const generateUUID = require("../utils/generateUUID");
const connection = require("../database/connection");

const DB_NAME = "ongs";

module.exports = {
  async create(request, response) {
    const id = generateUUID();

    const { name, email, whatsapp, city, uf } = request.body;

    await connection(DB_NAME).insert({ id, name, email, whatsapp, city, uf });

    return response.json({ id });
  },

  async index(request, response) {
    const ongs = await connection(DB_NAME).select("*");
    return response.json(ongs);
  }
};
