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

require('dotenv').config();

// set up express app
const app = express();

// Middleware
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

// initialize routes
// require('./routes/users')(app);
app.use('/api/users', require('./routes/users'));


// Error handling Middleware


// listen for request
const port = process.env.PORT || 3007;
app.listen(port, () => {
  console.log(`Magic happens on port ${port}`);

  // MongoDB configuration
  mongoose.Promise = global.Promise;
  mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true },
    (err, res) => {
      if (err) console.error(err);
      else console.log('Connected to Database');
    }
  );
});
