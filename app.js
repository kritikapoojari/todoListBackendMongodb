const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const Task = require("./models/taskSchema");
const router = require("./routes/todoRoutes");
const taskRouter = require("./routes/todoRoutes");

const app = express();

mongoose.connect(
    process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    (err, connection) => {
        if (err) {
            console.log(err);
            return console.log("Error in connecting to database");
        }
        console.log("Sucessfully connected to database");

        app.use(express.json());
        app.use("/taskList", taskRouter);

        app.listen(process.env.PORT, () => {
            console.log(`Server started on port ${process.env.PORT}`);
        });
    }
);