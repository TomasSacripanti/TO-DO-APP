const router = require("express").Router();
const {getAllTasks,getTodayTasks,createTask,getTask,deleteTasks} = require("../controllers/task.js");
const {jsonParser, urlencodedParser} = require("../parsers.js");

router.get("/", getAllTasks);
router.get("/today", getTodayTasks);
router.post("/",jsonParser, createTask);
router.get("/:id", getTask);
router.delete("/", deleteTasks);

module.exports = router;