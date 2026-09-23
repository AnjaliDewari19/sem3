//      event loop
console.log("Welcome...");

process.nextTick(() => {
    console.log("Next Tick Run...")
});

setImmediate(() => {
    console.log("Immediate Run...")
});

setTimeout(() => {
    console.log("Timeout")
});

console.log("...............Exit...............")