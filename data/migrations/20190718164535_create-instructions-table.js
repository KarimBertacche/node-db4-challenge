
exports.up = function(knex) {
    return knex.schema.createTable('instructions', table => {
        table.increments();
        table.text('instruction_step', 128).notNullable();
        table.text('instruction').notNullable();
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('instructions');
};
