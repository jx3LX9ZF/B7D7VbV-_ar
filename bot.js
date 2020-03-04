const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "!"
bot.on('ready', () => {
  bot.user.setActivity("!END Pass Maker 1.0")
  console.log('---------------');
  console.log('!END Pass Maker 1.0')
  console.log('---------------')
});
function randomLetters(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$&";
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
       return text;
    }
/* send pass in public Chat
bot.on('message',msg=>{
    if(msg.content ==="!pass"){
       // msg.reply(Math.floor(Math.random() * 300) + 130)
       // msg.reply(Math.floor(Math.random() * 30) + 12)
       msg.reply(mailtxt)
    }
});
*/

const Pass01 = [
	"pass"
  ];

bot.on('message', message => {
  if(Pass01.some(word => message.content.includes(word))) {
message.author.send(randomLetters(16));
    }
}); 

 /*  sapm chat
bot.on('message',msg=>{
  if(msg.content ==="سلام"){
    for(var i = 1 ; i < 333; i ++)
    msg.reply("!END is Here")
  }
});
*/

/*
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bott48891@gmail.com',
    pass: '1122qqww1'
  }
});

var mailOptions = {
  from: 'bott48891@gmail.com',
  to: 'rjs@hotmail.com',
  subject: '!END pass Maker',
  text: randomLetters(16)
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
*/
bot.login("Njg0MzQ0MzEyMjk2ODk4NTg4.Xl4vYQ.Ev8K3m3CtkHNj9czYeRbBf_eu2A");