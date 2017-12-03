module.exports = function(controller) {
controller.hears(['thank you', 'thanks'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            //convo.say('This is an example of using convo.ask with a single callback.');
            convo.say('No problem! Type \'help\' if you get stuck!')
            convo.next();

        });

    });
}
  