
module.exports = function(controller) {

    controller.hears(['watch', 'orientation', 'watch orientation', 'watch orientation video'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            convo.say('Watch our orientation video at: \n https://www.youtube.com/watch?v=jzfBKj4DEHo \n');
                         
          
            convo.next();
                      
               
        });  
            
    });

    
};

