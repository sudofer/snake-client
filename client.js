const net = require("net");
const { host, port } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host, // IP address here,
    port, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected!!");
    conn.write("Name: AFM");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;
