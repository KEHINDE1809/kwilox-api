require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/databaseconnect');

const drinkRoutes = require('./routes/drinkRoutes');

const app = express();
connectDB();
app.use(express.json());
app.use('/api', drinkRoutes);

const port = process.env.PORT || 3000;
 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})