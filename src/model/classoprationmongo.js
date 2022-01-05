const mongoose = require('mongoose');
const colors = require('colors');
const Reclamacaomodel = require('./urlsiteschema');
const connection = require('./connection');
const sendDiscord = require('../service/sendDiscord');

const classoperationmongo = {
  start: async () => {
    connection();
  },
  add: async (dt) => {
    try {
      const dadosreclames = new Reclamacaomodel({ reclame: dt.reclame });
      const dadosdeconsulta = await Reclamacaomodel.find({ reclame: dadosreclames.reclame })
        .countDocuments();
      if (dadosdeconsulta === 0) {
        await dadosreclames.save();
        sendDiscord(dadosreclames.reclame);
        console.log(`Cadastrando: ${dadosreclames.reclame}`.green);
      } else {
        console.log('Dados já cadastrado!'.red);
      }

      setTimeout(() => { mongoose.connection.close(); }, 5000);
      console.log('>>FECHANDO CONN!!');
    } catch (error) {
      console.log(`Não foi salvar dados! => ${error}`);
    }
  },

};

module.exports = classoperationmongo;