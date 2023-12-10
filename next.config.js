/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const mongoose = require("mongoose")

const mongoUrl = process.env.MONGODB_URI;

mongoose.connect(mongoUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});