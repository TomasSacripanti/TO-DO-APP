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
    getTask: async (req, res) => {
        try {
            const {id} = req.params;
            const task = await TaskModel.findById(id);
            if (!task.date === moment().format("YYYY/MM/DD")) {
                res.json({status: 404, message: "The requested task is not from today"});
            } else {
                res.json({status: 200, data: task});
            }
        } catch (error) {
            console.log(error.message);
        }
    },
    getTodayTasks: async (req, res) => {
        try {
            const todayTasks = await TaskModel.find();
            todayTasks.filter(task => {
                task.date.toISOString().split('T')[0] === moment().format("YYYY/MM/DD");
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
                date: new Date().toISOString().split('T')[0]
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
    },
    deleteTasks: async (req, res) => {
        await TaskModel.deleteMany();
        res.json({status: 200, message: "All tasks deleted"});
    }
};

module.exports = taskControllers;