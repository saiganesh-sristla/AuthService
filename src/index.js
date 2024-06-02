const express = require('express');
const { PORT } = require('./config/serverConfig');
const app = express();

function setupAndStartServer() {
    app.use(express.json());

    app.listen(PORT, () => {
        console.log(`Server started at PORT: ${PORT}`);
    })
}

setupAndStartServer();