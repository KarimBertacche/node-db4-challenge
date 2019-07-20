
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'pasta', ingredient_unit: 'gr'},
        {id: 2, ingredient_name: 'tomato-sauce', ingredient_unit: 'can'},
        {id: 3, ingredient_name: 'coffe', ingredient_unit: 'ml'},
        {id: 4, ingredient_name: 'milk',
        ingredient_unit: 'ml'},
        {id: 5, ingredient_name: 'chocolate',
        ingredient_unit: 'pack'},
        {id: 6, ingredient_name: 'dough',
        ingredient_unit: 'single'},
        {id: 7, ingredient_name: 'cheese',
        ingredient_unit: 'gr'},
        {id: 8, ingredient_name: 'biscuits', ingredient_unit: 'pack'},
        {id: 9, ingredient_name: 'sugar', 
        ingredient_unit: 'gr'},
      ]);
    });
};
