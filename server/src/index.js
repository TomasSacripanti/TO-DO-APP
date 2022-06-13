const app = require("./app.js");
require('dotenv').config();

//Database
const mongoose = require('./database.js');

//Server initializing
app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}`);
});
