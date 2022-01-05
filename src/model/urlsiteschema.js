const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  reclame: String,
});

const Reclamacao = mongoose.model('Reclamacao', schema);

module.exports = Reclamacao;