const Drink = require('../models/Drink');

// Add new drink
exports.createDrink = async (req, res) => {
  try {
    const { name, manufacturer, expiryDate, quantity } = req.body;
    
    const existingDrink = await Drink.findOne({ name, manufacturer });
    
    if (existingDrink) {
      return res.status(400).json({ message: 'Drink already exists' });
    }
    const drink = await Drink.create({ name, manufacturer, expiryDate, quantity });
    return res.status(201).json(drink); 
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// get product by ID//
exports.getDrinkById = async (req, res) => {
  try {
    const drink = await Drink.findById(req.params.id);
    if (!drink) return res.status(404).json({ message: 'Drink not found' });
    res.json(drink);
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
