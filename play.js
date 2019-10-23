//  * Setup User Interface 
//  * Specifically, so that we can handle user input via stdin
//  */

const handleUserInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.stdout.write(`Cancelled!\n`);
      process.exit();
    }
  });
}

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.resume();
  return stdin;
}

// const net = require('net');
const connect = require('./client');

console.log('Connecting ...');
connect();

setupInput();
handleUserInput();
