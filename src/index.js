const express = require("express");
const bodyparser = require('body-parser');
const { PORT } = require("./config/serverConfig");
const apiRoute = require("./routes/index");
const {User, roles} = require("./models/index");
const db = require("./models/index");
const app = express();

function setupAndStartServer() {
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(bodyparser.json());

  app.use("/api", apiRoute);

  app.listen(PORT,async () => {
    console.log(`Server started at PORT: ${PORT}`);

    if(process.env.SYNC){
      db.sequelize.sync({alter:true});
    }

    // const u1 = await User.findByPk(9);
    // const r1 = await roles.findByPk(1);
    // await u1.addRole(r1);

    // const response = await u1.hasRole(r1);
    // console.log(response);

  });
}

setupAndStartServer();
