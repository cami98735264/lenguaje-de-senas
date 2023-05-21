// Require express, cors, dotenv, and routes
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");

// App uses cors and json and urlencoded middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// App routes
app.get("/", (req, res) => {
    res.send("Welcome to the backend!");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000.");
});
