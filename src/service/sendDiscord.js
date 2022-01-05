const { MessageEmbed, WebhookClient } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

function sendDiscord(mensag) {
  const webhookClient = new WebhookClient({
    id: process.env.IDCANALESTUDOSDISCORD, token: process.env.TOKENCANALESTUDOSDISCORD,
  });

  const embed = new MessageEmbed()
    .setTitle('Reclames Itau')
    .setColor('#0099ff');

  webhookClient.send({
    content: mensag,
    username: 'Pedro',
    avatarURL: 'https://i.imgur.com/A9bc1uI.png',
    embeds: [embed],
  });
}

module.exports = sendDiscord;