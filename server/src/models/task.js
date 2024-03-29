const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    done: {type: Boolean, required: true, default: false},
    date: {type: Date, required: true},
});

module.exports = mongoose.model('Task', TaskSchema);