const connection = require('../database/connection');

const DB_NAME = 'incidents';

module.exports = {
	async index(request, response) {
		const ong_id = request.headers.authorization;

		const incidents = await connection(DB_NAME)
			.select('*')
			.where('ong_id', ong_id);

		return response.json(incidents);
	}
};
