const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index.route');

const PORT = config.get('port');
const app = express();
app.use(bodyParser.json());
app.use("/api", router);


const listen = app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

module.exports = app;
module.exports.port = listen.address().port;