//Import events module
var events = require('events');

//Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

//Create an event handler as follows
var connectHandler = function connected(){
  console.log('connection successful.');

  // Fire the data recieved event
  eventEmitter.emit('data recieved');
};

//Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

//Bind the data_recieved event witht he anonymous function
eventEmitter.on('data_recieved', function(){
  console.log('data recieved successfully.');
});

//Fire the connection event
eventEmitter.emit('connection');

console.log("Program ended.");

//////////////////////////////////////////////////////////
