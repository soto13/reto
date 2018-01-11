const express = require('express');
const app = express.Router();

const indexController = require('../controllers/index');

app.get('/', indexController.index);
app.get('/products', indexController.getProducts);
app.post('/new-product', indexController.newProduct);

module.exports = app;
