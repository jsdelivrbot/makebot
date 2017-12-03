/*

 *Glitch javascript file allowing bot to assist user in setting up a meeting with JR

 */

module.exports = function(controller) {

    controller.hears(['key pickup', 'key', 'pickup', 'meet JR'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            convo.say('Click the link to visit the Key Pickup Calendar and schedule a time to pick up your ID key: \nhttps://calendly.com/jrlogan/new-member/ \n');
                         
          
            convo.next();
                      
               
        });  
            
    });

    
};
