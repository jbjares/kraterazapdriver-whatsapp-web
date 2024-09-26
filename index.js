const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Usar autenticação local para não precisar escanear o QR sempre
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    // Gerar o QR code no terminal
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp Web client is ready!');
});

client.on('message', msg => {
    console.log(`Mensagem recebida: ${msg.body}`);

    // Exemplo de resposta automática
    if (msg.body.toLowerCase() === 'oi') {
        msg.reply('Olá! Como posso te ajudar?');
    }
});

client.initialize();

