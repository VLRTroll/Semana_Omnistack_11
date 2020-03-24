const express = require('express');

const app = express();

//informa que o corpo das requisições devem ser parseados para JSON
app.use(express.json());

app.get('/', (request, response) => {
	return response.json({ message: 'Hello World' });
});

app.listen(3333);
