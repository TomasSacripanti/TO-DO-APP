//Imports
const express = require("express");
const cors =  require("cors");
const morgan = require("morgan");
const path = require("path");
const taskRoutes = require("./routes/task.js");

//Settings
const app = express();
app.set("port", process.env.PORT || 3000);

//Routes
app.use('/api/task', taskRoutes);

//Static files
app.use(express.static(path.join(__dirname, '../../client/public')));

//Usings
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


module.exports = app;