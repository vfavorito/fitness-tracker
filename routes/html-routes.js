const express = require("express");
const HTMLrouter = express.Router();
const path = require("path");
// when the "/" route is hit send the index.html file to display to the user
HTMLrouter.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
});
// when the  "/exercise" route is hit send the exercise.html file to display to the user
HTMLrouter.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/html/exercise.html"))
});
// when the "/stats" route is hit send the stats.html file to display to the user
HTMLrouter.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/html/stats.html"))
})


module.exports = HTMLrouter;