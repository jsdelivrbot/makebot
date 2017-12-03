/*

 * Glitch javascript file allowing MakeBot to assist user in scheduling a meeting with JR/ID key pickup

*/

module.exports = function(controller) {

    controller.hears(['join_different_slack','new slack', 'join new slack', 'new community', 'slack'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            convo.say('Join the MakeHaven slack community here: www.slackin.makehaven.org \n');
            convo.say('Join a different slack community here: www.slack.com \n');
            // https://api.slack.com/methods/reminders.add
               
          
            convo.next();
                      
               
        });  
            
    });

    
};

