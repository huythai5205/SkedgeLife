const db = require('../models');
//TODO: ask why can't return data
module.exports = function (app) {
  //create a class with intructorID
  app.post('/api/class/:instructorID', (req, res) => {
    console.log("class");
    db.Class.create(req.body)
      .then(classData => {
        return db.User.findOneAndUpdate({
          _id: req.params.instructorID
        }, {
          $push: {
            classesTeaching: classData._id
          }
        });
        res.json(classData);
        console.log("classData");
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
  //delete class
  app.get('api/class/:id', (req, res) => {
    db.Class.remove({
        _id: req.params.id
      })
      .then(dataData => res.json(dataData))
      .catch(err => res.status(422).json(err));
  });
}
