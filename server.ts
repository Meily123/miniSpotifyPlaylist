import routes from './routes';
import express from 'express';
import mongoose, {ConnectOptions} from 'mongoose';

require ('dotenv').config ();

const port = process.env["PORT "];
const connectionString: string = process.env["MONGO_CONNECTION_STRING"]!;


mongoose.connect (connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
} as ConnectOptions)
    .then ((db) => {
        console.log (connectionString);
        console.log ("Database Connected Successfuly.");
    })
    .catch ((err) => {
        console.log ("Error Connectiong to the Database");
        console.log (`ERROR: ${err}`);
    });


const app = express ();
app.use (routes);

app.listen (port, () => {
    console.log ('Server is running on port 3000');
});
