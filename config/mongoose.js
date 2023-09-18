import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1/auth_db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting Database"));

db.once("open", console.log.bind(console, "Connected with database"));

export default mongoose;
