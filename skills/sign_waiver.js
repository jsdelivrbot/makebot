module.exports = function(controller) {

    controller.hears(['waiver','sign waiver', 'sign'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            convo.say('Hi! Please complete the waiver at this link: https://www.makehaven.org/start/take-next-step \n');
            convo.say('Join a different slack community here: www.slack.com \n');
            // https://api.slack.com/methods/reminders.add
               
          
            convo.next();
                      
               
        });  
            
    });

    
};


