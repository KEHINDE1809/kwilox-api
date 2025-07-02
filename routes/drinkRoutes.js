const express = require('express');
const router = express.Router();
const drinkController = require('../controllers/drinkController');

router.post('/drinks', drinkController.createDrink);
router.get('/drinks', drinkController.getAllDrinks);
router.put('/drinks/:id', drinkController.updateDrink);
router.delete('/drinks/:id', drinkController.deleteDrink);

module.exports = router;
