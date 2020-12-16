const express = require("express");
const {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    updateTask,
} = require("../controllers/taskController");

const router = express.Router();

router.route("/tasks").get(getAllTasks).post(createTask);
router
    .route("/tasks/:taskId")
    .get(getTaskById)
    .delete(deleteTask)
    .put(updateTask);

module.exports = router;