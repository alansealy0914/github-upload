var sils = require('../database/sils'),
  getNextId = require('./getNextId');

var nextId = getNextId(sils);

exports.getSils = function(req, res) {
  res.send(sils);
}

exports.getSilById = function(req, res) {
  var index = req.params.id - 1;
  res.send(sils[index]);
}

exports.getSilsByUser = function(req, res) {
  res.send(sils.filter(sil => sil.id === parseInt(req.params.id)))
}

exports.createSil = function(req, res) {
  var newSil = req.body;
  newSil.id = nextId;
  nextId++;
  sils.push(newSil);

  res.send(newSil);
  res.end(); 
}
