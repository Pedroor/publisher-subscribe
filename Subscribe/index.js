var zmq = require("zeromq"),
  sock = zmq.socket("sub");

sock.connect("tcp://127.0.0.1:3000");
sock.subscribe("aula de SD");
console.log("Subscriber connected to port 3000");

sock.on("message", function (topic, message) {
  console.log(
    "received a message related to:",
    topic.toString(), // Converte o buffer do tópico para uma string
    "containing message:",
    message.toString() // Converte o buffer da mensagem para uma string
  );
});
