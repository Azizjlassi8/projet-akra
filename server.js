// 1
const express = require("express");

// 2 
const app = express();

// 5 
require("dotenv").config();

// 6 
const connectDB = require ('./Config/connectDB');
connectDB();

// 7 routing
// middleware global
app.use(express.json());

// middleware route
app.use('/api/user', require("./Routes/user"));
app.use('/api/admin', require('./Routes/admin'));
app.use('/api/users',require("./Routes/users"));
app.use('/api/book',require("./Routes/book"));


// 3 create PORT
const PORT = process.env.PORT;

// 4 create server
app.listen(PORT, (err) => {
    err ? console.error(err)
    : console.log(`Server runing on port ${PORT}..`);
});