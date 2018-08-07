// const net = require("net");

// const client = net.createConnection(6969, "0.0.0.0", () => {
//  client.write("HELLO IM HERE");
//  client.on("data", data => {
//    console.log(data.toString());
//  });
//  process.stdin.pipe(client);
// });


const net = require("net");

const client = net.createConnection(6969, "0.0.0.0", () => {
  client.write("Jason");
  client.on("data", data => {
    console.log(data.toString());
    // console.log(data + 1);
    // console.log('client', client.address());
    // console.log('net', net);
  });
  process.stdin.pipe(client);
});

