const fs = require("fs");
const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, { origins: "*:*" });

const PORT = process.env.PORT || 80;
const URL = process.env.URL || `http://localhost:${PORT}`;

const htmlData = fs
  .readFileSync(__dirname + "/index.html")
  .toString()
  .replace(new RegExp('"[$][$]URL[$][$]"', "g"), `"${URL}"`);

app.get("/", function(req, res) {
  res.send(htmlData);
});

app.get("/favicon.ico", function(req, res) {
  res.sendFile(__dirname + "/favicon.ico");
});

io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("message", function(msg) {
    console.log("message: " + msg);
  });

  socket.on("message", function(msg) {
    io.emit("message", msg);
  });
});

http.listen(PORT, function() {
  console.log("listening on:", PORT);
});
