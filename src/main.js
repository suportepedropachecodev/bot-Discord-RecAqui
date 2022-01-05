const extrai = require('./service/extrai');
const classoperationmongo = require('./model/classoprationmongo');

async function main() {
  classoperationmongo.start();
  const dados = await extrai();
  dados.map((reclame) => {
    const dado = JSON.stringify({ reclame });
    const dadoObj = JSON.parse(dado);
    return classoperationmongo.add(dadoObj);
  });
}

main();