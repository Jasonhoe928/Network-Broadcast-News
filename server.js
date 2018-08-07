const net = require("net");

let clients = [];

const server = net.createServer(client => {
 console.log("CLIENT CONNECTED!");
 client.write("ALOHA WELCOME TO SPARTASERVE");
 client.on("data", data => {
   console.log(data.toString());
   
   const msg = data.toString();
   
   clients.forEach(socket => {
     if (client !== socket) {
       socket.write(msg);
     }
   });


     // if (client !== client) {
       // for (let i = 0; i < clients.length; i++) {
       //   clients[i].write(msg);
       // }
     // }
   });
   clients.push(client);
});

server.listen(6969, () => {
 console.log("Server listening on port 6969");
});


// const net = require("net");
// const clients = [];

// const server = net.createServer(client => {
//   console.log("CLIENT CONNECTED!");
//   client.write("ALOHA WELCOME TO SPARTASERVE");
//   client.on("data", data => {
//       const msg = data.toString();
//       clients.forEach(socket => {
//           if(client !== socket) {
//               socket.write(
//             msg
//           );
//           };
//       })
//     // console.log(data.toString());
//     // console.log('server', server);
// });
// clients.push(client);
// });

// server.listen(6969, () => {
//   console.log("Server listening on port 6969");
// });