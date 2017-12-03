/*

Botkit Studio Skill module to enhance the "join_different_slack" script

*/

module.exports = function(controller) {

    controller.hears(['n', 'tool'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            convo.say('1: Laser cutting \n2: 3D printing \n3: Woodworking');
            // https://api.slack.com/methods/reminders.add
               
          
            convo.reminders.add()
            convo.ask('Choose an area of interest by typing 1, 2, or 3.\n', function(response, convo){
                               
                 //print appropriate video links
                  if(response.text == '1'){
                    convo.say('Cool, I like laser cutting too!');
                    convo.say('Here are some awesome laser cutting videos that might be helpful:\n');
                    convo.say('Learn the basics of laser cutting\n https://www.youtube.com/watch?v=4TaAvGx8crc \n');
                    convo.say('Time lapse of laser cutting project\n https://www.youtube.com/watch?v=jO7bVcIew-w \n');
                    convo.say('Here you can get your laser cutting badge\n https://www.makehaven.org/badges/laser-cutter \n')
                    convo.next();
                  }
                  else if(response.text == '2'){
                    convo.say('Cool, I like 3D printing too!');
                    convo.say('Here is a great 3D printing video that you might enjoy:\n');
                    convo.say('3D printing overview\n https://www.youtube.com/watch?v=Sc1SwWCKy4c \n');
                    convo.next();
                  }
                  else if(response.text == '3'){
                    convo.say('Cool, I like woodworking too!');
                    convo.say('These woodworking videos are a perfect place to start your next project:\n');
                    convo.say('Get yourself oriented in the wood shop!\n https://www.youtube.com/watch?v=iEkYFWndn9g \n');
                    convo.say('Learn the ins and outs of hand planing!\n https://www.youtube.com/watch?v=yVvgFxSidic \n');
                    convo.say('Watch the formation of a wooden handheld game console!\n https://www.youtube.com/watch?v=LHeVOy5B9ds \n');
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






/**
module.exports = function(controller) {
    // define a before hook
    // you may define multiple before hooks. they will run in the order they are defined.
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiobefore
    controller.studio.before('join_different_slack', function(convo, next) {

        // do some preparation before the conversation starts...
        // for example, set variables to be used in the message templates
        // convo.setVar('foo','bar');

        console.log('BEFORE: join_different_slack');
        // don't forget to call next, or your conversation will never continue.
        next();

    });

    /* Validators */
    // Fire a function whenever a variable is set because of user input
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiovalidate
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*
    // Validate user input: question_1
    controller.studio.validate('join_different_slack','question_1', function(convo, next) {

        var value = convo.extractResponse('question_1');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: join_different_slack VARIABLE: question_1');

        // always call next!
        next();

    });

    // Validate user input: question_2
    controller.studio.validate('join_different_slack','question_2', function(convo, next) {

        var value = convo.extractResponse('question_2');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: join_different_slack VARIABLE: question_2');

        // always call next!
        next();

    });

    // Validate user input: question_3
    controller.studio.validate('join_different_slack','question_3', function(convo, next) {

        var value = convo.extractResponse('question_3');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: join_different_slack VARIABLE: question_3');

        // always call next!
        next();

    });

    /* Thread Hooks */
    // Hook functions in-between threads with beforeThread
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiobeforethread
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*
    // Before the default thread starts, run this:
    controller.studio.beforeThread('join_different_slack','default', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *join_different_slack*, about to start the thread *default*');

        // always call next!
        next();
    });

    // Before the on_timeout thread starts, run this:
    controller.studio.beforeThread('join_different_slack','on_timeout', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *join_different_slack*, about to start the thread *on_timeout*');

        // always call next!
        next();
    });


    // define an after hook
    // you may define multiple after hooks. they will run in the order they are defined.
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudioafter
    controller.studio.after('join_different_slack', function(convo, next) {

        console.log('AFTER: join_different_slack');

        // handle the outcome of the convo
        if (convo.successful()) {

            var responses = convo.extractResponses();
            // do something with the responses

        }

        // don't forget to call next, or your conversation will never properly complete.
        next();
    });
}
*/