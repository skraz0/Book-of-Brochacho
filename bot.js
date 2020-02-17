var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
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
        var messages = ["Everything that goes down your throat is my business. – Matt ",
                        "Yo. THAT’S MASSIVE! – Steve",
                        "I’ve always wanted Steven’s human touch. – Matt",
                        "The one thing I genuinely admire about Matt… is nothing. – Steve",
                        "If my kids first word… is Moodle… then I might have to sell him on Ebay. – Steve",
                        "They taste like little balls that pop in your mouth. – Matt",
                        "My grandfathers cremation? – Steve",
                        "I’m dumb… and stupid. – Steve",
                        "Byue. – Steve",
                        "$Cobble to grab my gobbles$. – Matt",
                        "Look at that PINEAPPLE LOOKING MOTHERFUCKER with a beard. – Matt",
                        "Only real men eat the cream. – Matt",
                        "Fluctis fuckedus. – Matt",
                        "Where’d you come from you piece of shit tnt looking ass gnome. – Steve",
                        "You guys were jacking my dick… – Steve",
                        "I just came in my own sons pants. – Steve",
                        "My dick could be a fossil fuel at this point. – Steve",
                        "Is the ‘b’ in LGBTQ for blacks or bisexual? – Matt",
                        "3 and a half hp and my dick is like rock hard… my dick just grew like five inches. – Steve",
                        "I’m fast as fuck boiii.” – Steve",
                        "My dick just popped out my body and gave me a high five. – Steve",
                        "Have you ever wondered how wrinkly skin is after a bukkake? – Matt",
                        "Suck my nuts. – Matt",
                        "Damien cause I like black dudes. – Matt, posing as a chick so don’t take that out of context",
                        "I don’t pour Malibu, I pour drinks and chug Malibu. – Steve",
                        "Fuck Youporn, cheap Pornhub. – Matt",
                        "Isn’t ebony black in… like some other language? – Matt",
                        "You know what they say about big spoons? You get big knives. - Daniel",
                        "Ya Stevens a bitch and gets in my head",
                        "I only like chocolate nipples. - Matt",
                        "This is what real bros do, they mix their bros' parfait when the other is driving. - Steve",
                        "When you look up the word 'Good' in the dictionary, it says Kahlua. - Daniel",
                        "I would voluntarily suffocate to death in those thighs. - Daniel",
                        "A Steve in the hand is worth two in the bush. - Steve",
                        "I like having a cheerleader for my cock. - Matt",
        ];
        var images = [ "https://imgur.com/a/NpPm934",
                       "https://imgur.com/a/wVIM2FB",
                       "https://imgur.com/a/S597oTX",
                       "https://imgur.com/a/mkfFEaG",
                       "https://imgur.com/a/9DIA013",
                       "https://imgur.com/a/3MxjioD",
                       "https://imgur.com/a/kKSW9vR",
                       "https://imgur.com/a/CV5yx1Q",
                       "https://imgur.com/a/evLi9dq",
                       "https://imgur.com/a/LPFTqBL",
                       "https://imgur.com/a/twAS1eA"
        ];

        function randomMessages(messages){
          return messages[Math.floor(Math.random()*messages.length)];
        };

        function randomImages(images){
          return images[Math.floor(Math.random()*images.length)];
        };

        switch(cmd) {
            case 'preachtome':
                bot.sendMessage({
                    to: channelID,
                    message: randomMessages(messages)
                });
            break;
            case 'showme':
                bot.sendMessage({
                    to: channelID,
                    message: randomImages(images)
                });
            break;
            case 'lore':
                bot.sendMessage({
                    to: channelID,
                    message: 'This is how the Book of Brochacho came about. Watch and learn muthafucka. \n https://www.youtube.com/watch?v=5rm-7TZINqw'
                });
            break;
            // add more cases here
         }
     }
});
