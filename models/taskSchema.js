const uniqid = require("uniqid");
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskId: {
        type: String,
        default: uniqid(),
    },
    taskName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Pending",
    },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;