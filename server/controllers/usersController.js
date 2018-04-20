const db = require("../models");
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const config = require('../config');


const encryptPassword = (password) => {
  const myKey = crypto.createCipher("aes-128-cbc", "myPassword");
  password = myKey.update(password, "utf8", "hex");
  password += myKey.final("hex");
  return password;
}

const decryptPassword = (password) => {
  const myKey = crypto.createDecipher("aes-128-cbc", "myPassword");
  password = myKey.update(password, "hex", "utf8");
  password += myKey.final("utf8");
  return password
}


module.exports = function (app) {
  //create a user
  app.post("/api/user", (req, res) => {
    req.body.password = encryptPassword(req.body.password);
    db.User.create(req.body)
      .then(user => {
        user.password = decryptPassword(user.password);
        console.log(user);
        jwt.sign({
          user
        }, config.default.jwtSecret, (err, token) => {
          res.json(token);
        });
      }).catch(err => res.status(422).json(err));
  });

  //get all users
  app.get("/api/users", (req, res) => {
    db.User.find({})
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  });

  //get login user with classes they're taking and/or teaching
  app.post("/api/login/", (req, res) => {
    db.User.findOne({
        email: req.body.email
      })
      .populate("classesTeaching")
      .populate("classTaking")
      .then(user => {
        if (user) {
          if (decryptPassword(user.password) === req.body.password) {
            jwt.sign({
              user
            }, config.default.jwtSecret, (err, token) => {
              res.json(token);
            });
          } else {
            res.status(401).json({
              errors: {
                form: 'Invalid Credentials'
              }
            });
          }
        } else {
          res.status(401).json({
            errors: {
              form: 'Invalid Credentials'
            }
          });
        }
      })
      .catch(err => res.json(err));
  });

  //delete user
  app.get("api/user/:id", (req, res) => {
    db.User.remove({
        _id: req.params.id
      })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  });

  // Route for saving/updating an Article's associated Note
  app.post("/articles/:id", function (req, res) {
    // Create a new note and pass the req.body to the entry
    db.Note.create(req.body)
      .then(function (dbNote) {
        return db.Article.findOneAndUpdate({
          _id: req.params.id
        }, {
          note: dbNote._id
        }, {
          new: true
        });
      })
      .then(function (dbArticle) {
        // If we were able to successfully update an Article, send it back to the client
        res.json(dbArticle);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
};
