const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

client.on('ready', () => {
    console.log('Botumuz Aktif')
    const durumlar = [
      "MZR Code Tarandından Kodlanmıştır",
    ]
    setInterval(function () {
      let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
      client.user.setActivity(durum, { type : 'WATCHING' })
//LISTENING = DİNLİYOR
//WATCHING = İZLİYOR
//PLAYING = OYNUYOR 
    }, 10000);
    client.user.setStatus('online')
//idle = boşta
//dnd = rahatsız etmeyin
//online = çevrimiçi
});