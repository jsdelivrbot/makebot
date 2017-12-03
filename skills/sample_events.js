module.exports = function(controller) {

    controller.on('user_channel_join,user_group_join', function(bot, message) {

        bot.reply(message, 'Welcome, <@' + message.user + '>' + '! ' +
                  'For orientation, click the link to install MakeBot: https://slack.com/oauth/authorize?client_id=280783240052.281964108791&scope=bot,channels:write,groups:write,im:write,channels:history,groups:history,im:history,mpim:history');

    });

}
