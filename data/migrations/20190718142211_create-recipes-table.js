exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments();
            table.text('recipe_name', 128).unique().notNullable();
        })
        .createTable('ingredients', table => {
            table.increments();
            table.text('ingredient_name', 128).unique().notNullable();
            table.text('ingredient_unit').notNullable();
        })
        .createTable('recipe_details', table => {
            table.increments();
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.float('quantity')
                .notNullable();  
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_details')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
