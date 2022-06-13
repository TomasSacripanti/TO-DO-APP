const mongoose = require('mongoose');
const URI = process.env.DBSTRING;

mongoose.connect(URI)
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err.message));

module.exports = mongoose;