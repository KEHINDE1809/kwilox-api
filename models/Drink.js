const mongoose = require('mongoose');

const DrinkSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  manufacturer: {
    type: String,
    
  },
  expiryDate: {
    type: Date,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    
  }
}, { timestamps: true });


module.exports = mongoose.model('Drink', DrinkSchema);
