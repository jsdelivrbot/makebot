/*

This module handles communication between Yhackbot and 

In this example, Botkit hears a keyword, then asks a question. Different paths
through the conversation are chosen based on the user's response.

*/

module.exports = function(controller) {

    controller.hears(['interest'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            convo.say('1: Laser cutting \n2: 3D printing \n3: Woodworking');

            convo.ask('Choose an area of interest by typing 1, 2, or 3.\n', function(response, convo){
                               
                 //print appropriate video links
                  if(response.text == '1'){
                    convo.say('Cool, I like laser cutting too!');
                    convo.say('Here are some awesome laser cutting videos that might be helpful:\n');
                    convo.say('https://www.youtube.com/watch?v=4TaAvGx8crc \n');
                    convo.say('https://www.youtube.com/watch?v=jO7bVcIew-w \n');
                  }
                  else if(response.text == '2'){
                    convo.say('Cool, I like #D printing too!');
                    convo.say('Here is a great 3D printing video that you might enjoy:\n');
                    convo.say('https://www.youtube.com/watch?v=Sc1SwWCKy4c \n');
                  }
                  else if(response.text == '3'){
                    convo.say('Cool, I like woodworking too!');
                    convo.say('These woodworking videos are a perfect place to start your next project:\n');
                    convo.say('https://www.youtube.com/watch?v=iEkYFWndn9g -Get yourself oriented in the wood shop!\n');
                    convo.say('https://www.youtube.com/watch?v=yVvgFxSidic -Learn the ins and outs of hand planing!\n');
                    convo.say('https://www.youtube.com/watch?v=LHeVOy5B9ds -Watch the formation of a wooden handheld game console! \n');
                  }
                  else{
                    convo.say('Not a valid option, please type @YHackBot interest to restart sequence');
                  }
              

              });
                      
              convo.next();
               
        });  
            
    });

    
};
