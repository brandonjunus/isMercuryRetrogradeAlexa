let lambda = require('../../Lambda/index.js');
// let mockEvent = require('./Tests/sayHello.json');
let mockEvent = require('../Mock Requests/launchRequest.json');

let callback = (err, data) => {
  if (err) console.log("ERROR: ", err);
  console.log(data);
}

lambda.handler(mockEvent, null, callback);