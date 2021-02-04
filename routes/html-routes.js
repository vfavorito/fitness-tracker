const express = require("express");
const HTMLrouter = express.Router();
const path = require("path");

HTMLrouter.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

HTMLrouter.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/html/exercise.html"))
});

HTMLrouter.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/html/stats.html"))
})


module.exports = HTMLrouter;