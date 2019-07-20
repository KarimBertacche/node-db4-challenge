const express = require('express');

const Data = require('./scheme-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Data.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipes' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const shoppingList = await Data.getShoppingList(id);

    res.status(200).json(shoppingList);
  } catch(error) {
    res.status(500).json({
      message: 'Server error while retrieving shopping list'
    });
  }
});

router.get('/:id/instructions', async (req, res) => {
  try {
    const { id } = req.params;
    const instructions = await Data.getInstructions(id);

    res.status(200).json(instructions);
  } catch(error) {
    res.status(500).json({
      message: 'Server error while retrieving instruction for recipes'
    });
  }
});

module.exports = router;