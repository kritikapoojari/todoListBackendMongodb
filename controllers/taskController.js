const fs = require("fs");
const path = require("path");
const Task = require("../models/taskSchema");
const uniqid = require("uniqid");
const dotenv = require("dotenv");
const { userInfo } = require("os");
dotenv.config({ path: "./config.env" });
const fileName = path.join(__dirname, "..", "data", "listData.json");
const taskData = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const getAllTasks = async(req, res) => {
    try {
        let data = await Task.find();
        res.status(200).json({
            message: "Sucessful",
            data: data,
        });
    } catch (err) {
        res.status(500).json({
            message: "Unsucessful",
            data: err,
        });
    }
};

const getTaskById = (req, res) => {
    let data = taskData.find((data) => {
        return data.taskId === req.params.taskId;
    });
    if (data) {
        res.status(200).json({
            status: "Sucessful",
            data: data,
        });
    } else {
        res.status(404).json({
            status: "User not found",
        });
    }
};

const createTask = async(req, res) => {
    if (!req.body.taskName) {
        return res.status(400).send({
            message: "The Task Name cannote be empty.",
        });
    }
    try {
        const data = new Task({
            taskId: uniqid(),
            taskName: req.body.taskName,
            status: req.body.status,
        });
        let newData = await data.save();
        res.status(200).json({
            message: "New Data Added",
            data: newData,
        });
    } catch (err) {
        res.status(500).json({
            message: "Cannot add Data",
            data: err,
        });
    }
};

const deleteTask = async(req, res) => {
    if (!req.params.taskId) {
        return res.status(404).send({
            message: "User not found",
        });
    }
    try {
        const id = req.params.taskId;
        let result = await Task.deleteOne({ taskId: id });
        res.status(200).json({
            message: "Deleted Sucesfully",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            message: "Cannot be deleted",
            data: err,
        });
    }
};

const updateTask = async(req, res) => {
    if (!req.body.taskName) {
        return res.status(400).send({
            message: "The Task Name cannote be empty.",
        });
    }
    try {
        const status = req.params.status;
        let result = await Task.findOneAndUpdate(status, req.body);
        res.status(200).json({
            message: "Updated Sucessfully",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            message: "Cannot update the data",
            data: err,
        });
    }
};

module.exports.getAllTasks = getAllTasks;
module.exports.getTaskById = getTaskById;
module.exports.createTask = createTask;
module.exports.deleteTask = deleteTask;
module.exports.updateTask = updateTask;