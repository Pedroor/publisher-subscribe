var zmq = require("zeromq"),
  sock = zmq.socket("pub");

sock.bindSync("tcp://127.0.0.1:3000");
console.log("Publisher on to port 3000");

setInterval(function () {
  console.log("Enviando mensagem para os meus inscritos");
  sock.send(["aula de SD", "Mensagem para os inscritos enviada!"]);
}, 500);
