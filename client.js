const net = require('net');

//  Move the connect function from play.js into client.js, where it should be exported.
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    // host: '192.168.15.225',
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
   
  });

  conn.on('connect', () => {
    conn.write('Move: up');

  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: JJA");

    let m = setInterval(() => {
      conn.write("Move: up");
      conn.write("Move: right");

    }, 100);
    setTimeout(() =>  clearInterval (m), 2000);
  });

  return conn;
}



const handleUserInput = function() {

}

module.exports = connect;
