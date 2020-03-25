const connection = require('../database/connection');

const DB_NAME = 'ongs';

module.exports = {
	async create(request, response) {
		const { id } = request.body;

		const ong = await connection(DB_NAME)
			.select('name')
			.where('id', id)
			.first();

		if (!ong)
			return response.status(400).json({ error: 'No ONG found with this ID' });

		return response.json(ong);
	}
};
