module.exports = function(controller) {
 controller.hears(['help'], 'direct_message,direct_mention', function(bot, message) {


     bot.startConversation(message, function(err, convo) {
            convo.say('Hello there! \n To sign online waiver, type: sign waiver \n');
            convo.say('To watch our orientation video, type: watch orientation \n');
            convo.say('To schedule key pickup, type: key pickup \n');
            convo.say('To identify your area(s) of interest, type: interest \n');
            convo.say('To request tool approval, type: approval')
            // https://api.slack.com/methods/reminders.add
               
          
            convo.next();
                      
               
        });  

     });  
}
