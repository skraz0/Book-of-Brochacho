var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var str = "https://tenor.com/view/grevious-general-kenobi-star-wars-gif-11406339";
var result = str.link("https://www.w3schools.com");
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    console.log("bot is running...");
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '.') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'poo':
                bot.sendMessage({
                    to: channelID,
                    message: str
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});
