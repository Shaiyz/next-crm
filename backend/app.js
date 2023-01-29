const express = require("express");
const app = express();
const server = require("http").createServer(app);
const db = require("./models");
const cors = require("cors");
const bodyParser = require("body-parser");
const { lead } = require("./models");
const routes = require("./routes/lead.routes");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
console.log(io)
io.on("connection", function (socket) {
  sendStatus = function (s) {
    socket.emit("status", s);
  };
  socket.on("addlead", async function (data) {
    // Insert data
    const res = await lead.create(data);
    socket.emit("output", res);

    // Send status object
    sendStatus({
      message: "lead added",
      clear: true,
    });
  });
});
app.use(cors());
app.use(bodyParser.json());
app.set(express.urlencoded({ extended: false }));
app.set(express.json());

app.use("/api/v1", routes);
server.listen(8000, function () {
  console.log("Server is running at port:" + 8000);
});
