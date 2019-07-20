
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, recipe_id: 1, instruction_step: 1, instruction: 'Do this'},
        {id: 2, recipe_id: 1, instruction_step: 2, instruction: 'Do that'},
        {id: 3, recipe_id: 1, instruction_step: 3, instruction: 'Enjoy'}
      ]);
    });
};
