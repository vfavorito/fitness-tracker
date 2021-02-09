const express = require("express");
const mongoose = require("mongoose");
// bringing in the routes for the server to listen to
const APIrouter = require("./routes/api-routes");
const HTMLrouter = require("./routes/html-routes");
const PORT = process.env.PORT || 3000;
const app = express();
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// routes
app.use(APIrouter);
app.use(HTMLrouter);
mongoose.set("useFindAndModify", false);
// setting up the connection the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
// starting the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });