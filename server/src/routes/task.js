const router = require("express").Router();
const taskController = require("../controllers/task.js");

router.get("/", taskController.getTasks);

module.exports = router;