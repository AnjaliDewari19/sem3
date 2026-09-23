const EvenEmitter = require('events');

const event1 = new EvenEmitter();

event1.on('login' , (name) => {
    console.log(`${name}, login successfully !!\n`);
});

event1.on('assignment' , () => {
    console.log(`Assignment submitted successfully.\n`);
});

event1.on('logout' , (name) => {
    console.log(`${name}, logout successfully !!\n`);
});

event1.on('exit' , () => {
    console.log(`Application closed...\n`);
});

event1.emit('login', 'Anjali');
event1.emit('assignment');
event1.emit('logout', 'Anjali');
event1.emit('exit');
