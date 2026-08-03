const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

app.get("/", (req, res) => {
    res.send("Backend is Running Successfully!");
});

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/tasks", (req, res) => {
    const task = {
        id: Date.now(),
        title: req.body.title,
        status: "Pending"
    };

    tasks.push(task);
    res.json(task);
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});