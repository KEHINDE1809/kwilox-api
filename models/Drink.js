const mongoose = require('mongoose');

const DrinkSchema = new mongoose.Schema({
  name: {
    type: "Martell Blue Swift",
    required: true,
    trim: true
  },
  manufacturer: {
    type: "Martell",
    required: true,
    trim: true
  },
  expiryDate: {
    type: "2026-12-31",
    required: true
  },
  quantity: {
    type: 25,
    required: true,
    default: 0,
    min: [0, 'Quantity cannot be negative']
  }
}, { timestamps: true });

DrinkSchema.virtual('isExpired').get(function () {
  return new Date() > this.expiryDate;
});

DrinkSchema.set('toJSON', { virtuals: true });
DrinkSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Drink', DrinkSchema);
