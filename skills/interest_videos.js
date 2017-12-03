/*

This module handles communication between Yhackbot and 

In this example, Botkit hears a keyword, then asks a question. Different paths
through the conversation are chosen based on the user's response.

*/

module.exports = function(controller) {

    controller.hears(['interest', 'interest video'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            convo.say('1: Laser cutting \n2: 3D printing \n3: Woodworking');
 
            convo.ask('Choose an area of interest by typing 1, 2, or 3.\n', function(response, convo){
                               
                 //print appropriate video links
                  if(response.text == '1'){
                    convo.say('Cool, I like laser cutting too!');
                    convo.say('Here are some awesome laser cutting videos that might be helpful:\n');
                    convo.say('Learn the basics of laser cutting: \n https://www.youtube.com/watch?v=4TaAvGx8crc \n');
                    convo.say('Time lapse of laser cutting project: \n https://www.youtube.com/watch?v=jO7bVcIew-w \n');
                    convo.say('Here you can get your laser cutting badge: \n https://www.makehaven.org/badges/laser-cutter \n')
                    convo.next();
                  }
                  else if(response.text == '2'){
                    convo.say('Cool, I like 3D printing too!');
                    convo.say('Here is a great 3D printing video that you might enjoy:\n');
                    convo.say('3D printing overview \n https://www.youtube.com/watch?v=Sc1SwWCKy4c \n');
                    convo.next();
                  }
                  else if(response.text == '3'){
                    convo.say('Cool, I like woodworking too!');
                    convo.say('These woodworking videos are a perfect place to start your next project:\n');
                    convo.say('Get yourself oriented in the wood shop: \n https://www.youtube.com/watch?v=iEkYFWndn9g \n');
                    convo.say('Learn the ins and outs of hand planing: \n https://www.youtube.com/watch?v=yVvgFxSidic \n');
                    convo.say('Watch the formation of a wooden handheld game console! \n https://www.youtube.com/watch?v=LHeVOy5B9ds \n');
                    convo.next();
                  }
                  else{
                    convo.say('Not a valid option. To restart sequence, please type: interest');
                    convo.next();
                  }
              

              });
                      
               
        });  
            
    });

    
};
