const router = require("express").Router();
const {getAllTasks,getTodayTasks,createTask} = require("../controllers/task.js");

router.get("/", getAllTasks);
router.get("/today", getTodayTasks);
router.post("/", createTask);

module.exports = router;