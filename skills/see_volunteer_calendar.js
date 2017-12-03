/*

 *Glitch javascript file allowing bot to assist user in meeting MakeHaven volunteer for a tool session

 */

module.exports = function(controller) {

    controller.hears(['volunteer', 'calendar', 'approval', 'volunteer schedule', 'community volunteer', 'animator'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            convo.say('Click the link to schedule a tool approval session with a Community Volunteer: \nhttps://www.makehaven.org/community-animators-maker-coordinators \n');
                         
            convo.next();
                      
               
        });  
            
    });

    
};
