const Drink = require('../models/Drink');

// Add new drink
exports.createDrink = async (req, res) => {
  try {
    const { name, manufacturer, expiryDate, quantity } = req.body;
    const drink = await Drink.create({ name, manufacturer, expiryDate, quantity });
    res.status(201).json(drink);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all drinks
exports.getAllDrinks = async (req, res) => {
  try {
    const drinks = await Drink.find();
    res.status(200).json(drinks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update drink by ID
exports.updateDrink = async (req, res) => {
  try {
    const drink = await Drink.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!drink) return res.status(404).json({ message: 'Drink not found' });
    res.json(drink);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete drink by ID
exports.deleteDrink = async (req, res) => {
  try {
    const drink = await Drink.findByIdAndDelete(req.params.id);
    if (!drink) return res.status(404).json({ message: 'Drink not found' });
    res.json({ message: 'Drink removed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
