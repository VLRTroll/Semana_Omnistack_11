const crypto = require('crypto');
const connection = require('../database/connection');

const DB_NAME = 'ongs';

module.exports = {
	async create({ name, email, whatsapp, city, uf }) {
		const id = crypto.randomBytes(4).toString('HEX');

		await connection(DB_NAME).insert({ id, name, email, whatsapp, city, uf });

		return id;
	},

	async list() {
		return await connection(DB_NAME).select('*');
	}
};
