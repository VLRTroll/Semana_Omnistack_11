const express = require('express');
const OngController = require('./controllers/OngController');

const routes = express.Router();

routes.get('/ongs', async (request, response) => {
	return response.json(await OngController.list());
});

routes.post('/ongs', async (request, response) => {
	return response.json({ id: await OngController.create(request.body) });
});

module.exports = routes;
