// Babel ES6/JSX Compiler
require('babel-register');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const _ = require('underscore');
// what is this and is cool??????
// const async = require('async');

const config = require('./server-config');
const User = require('./models/user');
const Idea = require('./models/idea');
const Review = require('./models/review');
const routes = require('./routes');

const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', false);
  next();
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mallaise-mallet', {
  useMongoClient: true,
  /* other options */
}).catch( error => console.log(error))


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
