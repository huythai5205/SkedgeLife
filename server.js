const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

require('./controllers/usersController.js')(app);

app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
