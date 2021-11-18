const Discord = require('discord.js');

exports.run = async (client, message, args) => {

message.channel.send('Bot Aktif!')
}

exports.conf = {
  aliases: []
};

exports.help = {
  name : "Main"
};