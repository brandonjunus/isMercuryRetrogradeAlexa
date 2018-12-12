/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/
const Alexa = require('alexa-sdk');
const axios = require('axios');
//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';

const APP_ID = 'amzn1.ask.skill.8c7de785-90f0-439a-b562-8f2be42ead70';

const SKILL_NAME = 'Space Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
    let application = this;
    this.emit(':tell', 'Hello Brandon');
    this.emit(':ask', 'Would you like a name fact?', 'Seriously say something!') 
        // axios.get('https://mercuryretrogradeapi.com/', {
        // })
        // .then(function (res) {
        //     console.log("response: IsRetrograde?", res.data.is_retrograde);
        //     application.response.speak(!res.data.is_retrograde ? "No, but another update!": "Yes, Mercury is actually retrograde!");
        //     application.emit(':responseReady')
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    //   this.response.speak("hello we did a thing");
    //   this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'SayHello': function () {
      this.response.speak('Hello World!');
      this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
