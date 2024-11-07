const nodemailer = require('nodemailer');

// Crie o transportador Nodemailer com autenticação OAuth2
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'gmail',  // Seu e-mail do Gmail
    clientId: 'cliente id',  // Seu Client ID
    clientSecret: 'cliente secret',  // Seu Client Secret
    refreshToken: 'refresh token', // Seu Refresh Token
    accessToken: 'acessToken', // Seu Access Token
  },
});

// Defina as opções de e-mail
const mailOptions = {
  from: '',   // Seu e-mail do Gmail
  to: '',    // E-mail do destinatário
  subject: 'Teste com OAuth2',    // Assunto do e-mail
  text: 'vai da teu cu yan',  // Corpo do e-mail
};

// Envie o e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Erro ao enviar o e-mail:', error);
  }
  console.log('E-mail enviado com sucesso:', info.response);
});
