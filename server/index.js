const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const routes = require('./routes/api');
const requestRoutes = require('./routes/api_request');
const replyRoutes = require('./routes/api_reply');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

// Connect to the database
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

//app.use('/api', routes);
app.use('/api', requestRoutes);
app.use('/api', replyRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://admin:eggert@cluster0.ckvf6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });