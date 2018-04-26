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
      .then(userData => {
        userData.password = decryptPassword(userData.password);
        jwt.sign({
          userData
        }, config.default.jwtSecret, (err, token) => {
          res.json(token);
        });
      }).catch(err => res.status(422).json({
        errors: {
          form: 'User already exist'
        }
      }));
  });

  //get all users
  app.get("/api/users", (req, res) => {
    db.User.find({})
      .then(usersData => res.json(usersData))
      .catch(err => res.status(422).json(err));
  });

  //get login user with classes they're taking and/or teaching
  app.post("/api/login/", (req, res) => {
    db.User.findOne({
        email: req.body.email
      })
      .then(userData => {
        if (userData) {
          if (decryptPassword(userData.password) === req.body.password) {
            jwt.sign({
              userData
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
      .then(userData => res.json(userData))
      .catch(err => res.status(422).json(err));
  });

};
