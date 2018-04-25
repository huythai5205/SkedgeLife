const db = require('../models');
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
  //create a class with intructorID
  app.post('/api/class/:instructorID', (req, res) => {
    db.Class.create(req.body)
      .then(classData => {
        return db.User.findOneAndUpdate({
          _id: req.params.instructorID
        }, {
          $push: {
            classesTeaching: classData._id
          },
        }, {
          new: true
        });
      })
      .then(userData => {
        userData.password = decryptPassword(userData.password);
        jwt.sign({
          userData
        }, config.default.jwtSecret, (err, token) => {
          res.json(token);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  });

  //get all classes
  app.get('/api/classes', (req, res) => {
    db.Class.find({}).then(classesData => res.json(classesData))
      .catch(err => res.status(422).json(err));
  });

  //get one class
  app.get('/api/class/:id', (req, res) => {
    db.Class.findOne({
        _id: req.params.id
      }).populate('activity')
      .then(classData => res.status(422).json(classData))
      .catch(err => res.json(422).json(err));
  });

  //get a list of classes
  app.post('/api/classes', (req, res) => {
    console.log(req.body);
    db.Class.find({
        _id: {
          $in: req.body
        }
      }).then(classesData => res.json(classesData))
      .catch(err => console.log(err));
  });
  //delete class
  app.get('api/class/:id', (req, res) => {
    db.Class.remove({
        _id: req.params.id
      })
      .then(dataData => res.json(dataData))
      .catch(err => res.status(422).json(err));
  });
}
