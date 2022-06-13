const TaskModel = require("../models/task.js");
const moment = require("moment");


const taskControllers = {
    getAllTasks: async (req, res) => {
        try {
            const tasks = await TaskModel.find();
            res.json({code: 200, data: tasks});
        } catch (error) {
            console.log(error.message);
        }
    },
    getTodayTasks: async (req, res) => {
        try {
            const tasks = await TaskModel.find();
            const todayTasks = tasks.filter(task => {
                task.date === moment().format("YYYY/MM/DD");
            });
            res.json({code: 200, data: todayTasks});
        } catch (error) {
            console.log(error.message);
        }
    },
    createTask: async (req, res) => {
        try {
            const {title, description} = req.body;
            const newTask = new TaskModel({
                title: title,
                description: description,
                done: false,
                date: moment().format("YYYY/MM/DD")
            });
            await newTask.save();
            res.json({code: 201, message: "Task created"});
        } catch (error) {
            console.log(error.message);
        }
    },
    updateTask: async (req, res) => {
        const {id} = req.params;
        await TaskModel.findByIdAndUpdate(id, {});
    }
};

module.exports = taskControllers;