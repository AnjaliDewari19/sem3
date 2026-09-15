//      Event Emitter
/*const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet' , (name) => {
    console.log(`Hello , ${name}! Welcome to Node.js`);
});

myEmitter.on('exit', () => {
    console.log("Application Closed.");
});

myEmitter.emit('greet', '2nd year');
myEmitter.emit('exit');*/

//      DOM Simulation
const {EventEmitter} = require('events');

class Button extends EventEmitter {}
const but = new Button();

but.on('click', () => console.log('Button Clicked!'));
but.on('mouseover', () => console.log('Mouse is over the button.'));

but.emit('click');
but.emit('mouseover');
