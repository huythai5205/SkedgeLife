const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();

const PORT = process.env.PORT || 3001;
const mongoDB_URI = process.env.MONGODB_URI || "mongodb://localhost/skedgeLife";

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Connect to the Mongo DB
mongoose.connect(mongoDB_URI, err => {
  if (err) {
    console.log(err);
  } else {
    require('./controllers/usersController.js')(app);

    app.listen(PORT, err => {
      err ? console.log(err) : console.log("App running on port " + PORT + "!")
    });
  }
<<<<<<< HEAD:server.js
  require("./controllers/usersController.js")(app);

  app.listen(PORT, err => {
    err ? console.log(err) : console.log("App running on port " + PORT + "!");
  });
=======

>>>>>>> 0dc2b4d94e784230a74f793412d6be1161ff1f31:server/server.js
});
