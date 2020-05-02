var productsils = require('../database/productsils'),
  getNextId = require('./getNextId');

var nextId = getNextId(productsils);

exports.getProductsils = function(req, res) {
  res.send(productsils);
}

exports.getProductsilById = function(req, res) {
  var index = req.params.id - 1;
  res.send(productsils[index]);
}

exports.getProductsilsByUser = function(req, res) {
  res.send(productsils.filter(productsil => productsil.id === parseInt(req.params.id)))
}

exports.createProductsil = function(req, res) {
  var newProductsil = req.body;
  newProductsil.id = nextId;
  nextId++;
  productsils.push(newProductsil);

  res.send(newProductsil);
  res.end(); 
}
