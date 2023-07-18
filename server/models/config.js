const Mongo_url = process.env.MONGO_URL;
const mongoose = require("mongoose");
mongoose.connect(Mongo_url);

const db = mongoose.connection;
db.on("disconnected", console.error.bind(console, "conneciton error"));
db.once("connected", () => console.log("Connected to DB"));

// models or Collections
// ______________________

// categories
// recipies
