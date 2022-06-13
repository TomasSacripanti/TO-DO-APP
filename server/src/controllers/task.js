const TaskModel = require("../models/task.js");
const taskControllers = {
    getTasks: async (req, res) => {
        const tasks = await TaskModel.find();
        res.json(tasks);
    }
};

module.exports = taskControllers;