//atualizações desta migração
exports.up = function(knex) {
	return knex.schema.createTable('incidents', function(table) {
		table.increments(); //incremental primary key
		table.string('title').notNullable();
		table.string('description').notNullable();
		table.string('value').notNullable();

		table.string('ong_id').notNullable(); //foreign key
		table
			.foreign('ong_id') //coluna da chave estrangeira
			.references('id') //coluna referenciada
			.inTable('ongs'); //qual tabela
	});
};

//em caso de erro
exports.down = function(knex) {
	return knex.schema.dropTable('incidents');
};
