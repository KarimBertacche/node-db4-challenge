const knex = require('knex');
const db = knex(require('../knexfile').development);


function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db
        .select('recipes.id', 'recipes.recipe_name', 'ingredients.ingredient_name', 'recipe_details.quantity', 'ingredients.ingredient_unit')
        .from('recipe_details')
        .innerJoin('recipes', 'recipe_details.recipe_id', 'recipes.id')
        .innerJoin('ingredients', 'recipe_details.ingredient_id', 'ingredients.id')
        .where({ 'recipes.id': id });
}

function getInstructions(id) {
    return db
        .select('recipes.recipe_name', 'instructions.instruction_step', 'instructions.instruction')
        .from('instructions')
        .innerJoin('recipes', 'instructions.recipe_id', 'recipes.id')
        .groupBy('instructions.instruction_step');
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

