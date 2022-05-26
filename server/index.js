const express = require("express");
const cors = require("cors");

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(cors());

app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}`);
});
