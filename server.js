const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const drinkRoutes = require('./routes/drinkRoutes');

const app = express();
app.use(express.json());
app.use('/api', drinkRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB connected');
  app.listen(3000, () => console.log('Server running on port 3000'));
}).catch(err => console.error(err));
