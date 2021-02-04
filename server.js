const express = require("express");
const mongoose = require("mongoose");
const APIrouter = require("./routes/api-routes");
const HTMLrouter = require("./routes/html-routes");

const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(APIrouter);
app.use(HTMLrouter);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });