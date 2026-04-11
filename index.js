const { Client, GatewayIntentBits } = require('@jubbio/core');
const axios = require('axios');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.on('ready', () => {
  console.log(`${client.user.username} hazır!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === '!merhaba') {
    message.reply('Merhaba! Ben Tigin, nasıl yardımcı olabilirim?');
  }

  if (message.content === '!ping') {
    message.reply('Pong! 🏓');
  }

  if (message.content === 'sa') {
    message.reply('Aleykümselam! 👋');
  }

  if (message.content === '!saat') {
    const simdi = new Date();
    const saat = simdi.toLocaleTimeString('tr-TR');
    const tarih = simdi.toLocaleDateString('tr-TR');
    message.reply(`🕐 Saat: ${saat}\n📅 Tarih: ${tarih}`);
  }

  if (message.content.startsWith('!hava ')) {
    const sehir = message.content.slice(6);
    try {
      const res = await axios.get(`https://wttr.in/${sehir}?format=3&lang=tr`);
      message.reply(`🌤️ ${res.data}`);
    } catch (e) {
      message.reply('Hava durumu alınamadı, şehir adını kontrol et!');
    }
  }
});

client.login('de5659db3755755f9e3cd85bdf27d2ad2b488aaa3931e305736a67ceafde8c63');


