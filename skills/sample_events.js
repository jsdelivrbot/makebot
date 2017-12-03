module.exports = function(controller) {

    controller.on('user_channel_join,user_group_join', function(bot, message) {

        bot.reply(message, 'Welcome, <@' + message.user + '>');
        bot.reply('To join as a new MakeHaven user, click this link to start the MakeBot:\n ')

    });

}
