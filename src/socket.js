import openSocket from 'socket.io-client';

const StartWebSocket = () => {
  console.log("WS starting");
  const ws = openSocket('wss://api.coinstash.co.za:8080/', { secure: true });

  ws.on('open', () => {
    /* you can now start working with the connection */
    console.log("WS open");

    setTimeout(() => {
      ws.send(JSON.stringify({
        t: 'auth',
        token: '2612723ed3e5824e5959cd2e10c80220'
      }));
      console.log('Sending auth');
    }, 1000);

    setTimeout(() => {
      ws.send(JSON.stringify({ t: 'test_notify' }));
      console.log('Sending test_notify');
    }, 6000);
  });

  ws.on('message', data => {
    /* work with data */
    console.log("WS message '%s'", data);
    //var obj = JSON.parse(data);
  });

  ws.on('error', err => {
    /* handle error */
    console.log("WS error '%s'", err);
  });

  ws.on('close', () => {
    /* reconnect if needed */
    console.log("WS close");
  });

  ws.on('ping', () => {
    console.log("WS got ping");
    ws.pong();
  });

  ws.on('pong', () => {
    console.log("WS got pong");
  });
}

export default StartWebSocket;