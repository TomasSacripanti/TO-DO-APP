import TaskModel from "../models/task.js";
const taskControllers = {
    getTasks: async (req, res) => {
        const tasks = await TaskModel.find();
        res.json(tasks);
    }
};

export default taskControllers;