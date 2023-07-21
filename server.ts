require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")

const DATABASE_URL = process.env.MONGO_CONNECTION_STRING!;
console.log(DATABASE_URL);

mongoose.connect(DATABASE_URL);
const database = mongoose.connection;

// @ts-ignore
database.on('error', (error) =>{
    console.log(error);
});
database.once('connected', ()=>{
    console.log('Database Connected');
});


const app = express();
const PORT = process.env.PORT;


app.use(routes);

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
});