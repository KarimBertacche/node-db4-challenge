
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_details').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_details').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, quantity: 900},
        {id: 2, recipe_id: 1, ingredient_id: 2, quantity: 2},
        {id: 3, recipe_id: 1, ingredient_id: 7, quantity: 50},
        {id: 5, recipe_id: 2, ingredient_id: 2, quantity: .5},
        {id: 6, recipe_id: 2, ingredient_id: 6, quantity: 1},
        {id: 7, recipe_id: 2, ingredient_id: 7, quantity: 30},
        {id: 8, recipe_id: 3, ingredient_id: 3, quantity: 50},
        {id: 9, recipe_id: 3, ingredient_id: 4, quantity: 150},
        {id: 10, recipe_id: 3, ingredient_id: 8, quantity: 1},
        {id: 11, recipe_id: 3, ingredient_id: 9, quantity: 40}
      ]);
    });
};
