'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conecta com o banco
mongoose.connect('mongodb+srv://root:t5887rfz@cluster-node.znogc.mongodb.net/nodestr?retryWrites=true&w=majority');

// Carrega as Rotas
const indexRoutes = require('./routes/index-routes');
const productRoutes = require('./routes/product-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/products', productRoutes);

module.exports = app;