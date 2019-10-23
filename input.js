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
  stdin.on('data', handleUserInput)
  return stdin;
}

module.exports = setupInput;
