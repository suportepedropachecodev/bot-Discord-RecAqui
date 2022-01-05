const os = require('os');
const shell = require('shelljs');
const schedule = require('node-schedule');

const nodeVersion = process.versions.node.split('.')[0];

if (nodeVersion < 16) {
  throw new Error('É requirido a versão do node 16 ou mais');
}

const job = schedule.scheduleJob('*/3 * * * *', () => {
  const appdir = '/bot-Discord-RecAqui';
  const dirhome = os.homedir() + appdir;
  shell.cd(dirhome);
  shell.exec('node src/main.js');
  console.log('Exec agenda>>');
});