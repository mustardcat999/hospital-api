const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hashBoy:b3HCsaCZprmZWGVi@cluster0.xz0ilri.mongodb.net/hospital?retryWrites=true&w=majority");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connection to mongo"));

db.once("open", () => console.log("Successfully connected to mongo"));

module.exports = db;
