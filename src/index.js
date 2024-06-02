const express = require("express");
const bodyparser = require('body-parser');
const { PORT } = require("./config/serverConfig");
const apiRoute = require("./routes/index");
const app = express();

function setupAndStartServer() {
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(bodyparser.json());

  app.use("/api", apiRoute);

  app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
  });
}

setupAndStartServer();
