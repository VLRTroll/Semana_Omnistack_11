const connection = require('../database/connection');

const DB_NAME = 'incidents';

module.exports = {
	async create(request, response) {
		const ong_id = request.headers.authorization;
		const { title, description, value } = request.body;

		const [id] = await connection(DB_NAME).insert({
			title,
			description,
			value,
			ong_id
		});

		return response.json({ id });
	},

	async index(request, response) {
		const incidents = await connection(DB_NAME).select('*');
		return response.json(incidents);
	},

	async delete(request, response) {
		const { id } = request.params;
		const ong_id = request.headers.authorization;

		const incident = await connection(DB_NAME)
			.select('ong_id')
			.where('id', id)
			.first();

		if (incident.ong_id !== ong_id) {
			return response.status(401).json({ error: 'Operation not permitted' });
		}

		await connection(DB_NAME)
			.where('id', id)
			.delete();
		return response.status(204).send();
	}
};
