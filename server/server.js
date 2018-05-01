const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require("../webpack.config");
const app = express();

const PORT = process.env.PORT || 3001;
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/skedgeLife";


const herokuUser = 'heroku_ndv2kn47';
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://" + herokuUser + ":@ds161459.mlab.com:61459/heroku_ndv2kn47";
if (process.env.MONGODB_URI) {
  mongoose.connect(MONGODB_URI);
}

// const compiler = webpack(webpackConfig);

// app.use(webpackMiddleware(compiler, {
//   hot: true,
//   publicPath: webpackConfig.output.publicPath,
//   noInfo: true
// }));

// app.use(webpackHotMiddleware(compiler));
app.use(express.static('../client/build'));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, err => {
  if (err) {
    console.log(err);
  } else {
    require('./controllers/usersController.js')(app);
    require('./controllers/classesController.js')(app);

    app.listen(PORT, err => {
      err ? console.log(err) : console.log("App running on port " + PORT + "!")
    });
  }

});
