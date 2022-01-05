const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();

const usudb = process.env.USERDB;
const passdb = process.env.PASSDB;

function connection() {
  const URL = `mongodb+srv://${usudb}:${passdb}@cluster0.n3grf.mongodb.net/ReclamesItau?retryWrites=true&w=majority`;

  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', () => {
    console.error('ERRO AO CONECTAR'.red);
  });

  db.on('open', () => {
    console.log('CONEXAO COM SUCESSO!'.green);
  });
}

// connection();
module.exports = connection;