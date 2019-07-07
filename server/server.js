/**
 * Server.js
 * 
 * @description :: Main Server file also Entry point
 * @author      :: Joshim Uddin
 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// set up express app
const app = express();










 // listen for request
const port = process.env.PORT || 6300;
app.listen(port, () => {
  console.log(`Magic happens on port ${port}`);

  // // Load DB
  // const db = require('./config/keys').mongoURI;

  // // MongoDB configuration
  // mongoose.connect(
  //   db, { useNewUrlParser: true }, (err, res) => {
  //     if (err) console.error(err);
  //     else console.log('Connected to Database');
  //   }
  // );
});