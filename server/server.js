const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3001;
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/skedgeLife";
const cors = require("cors");


const herokuUser = 'heroku_ndv2kn47';
const MONGODB_URI = "mongodb://huythai:h12345@ds115340.mlab.com:15340/heroku_45s1lqzs";
if (process.env.MONGODB_URI) {
  mongoose.connect(MONGODB_URI);
}

app.use(express.static('../client/build'));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/', 'index.html'));
});

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, err => {
  if (err) {
    console.log(err);
  } else {
    require('./controllers/usersController.js')(app.use(cors()));
    require('./controllers/classesController.js')(app.use(cors()));

    app.listen(PORT, err => {
      err ? console.log(err) : console.log("App running on port " + PORT + "!")
    });
  }

});
