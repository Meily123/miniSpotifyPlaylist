import routes from './routes';

const express = require('express');

const mongoose = require('mongoose');

const port = process.env["PORT "];

mongoose.connect(process.env["MONGO_CONNECTION_STRING "], {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const app = express();


app.use(routes);

app.listen( port, () => {
  console.log('Server is running on port 3000');
});
