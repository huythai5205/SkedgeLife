const db = require('../models');

module.exports = function (app) {
  //create a user
  app.post('/api/user', (req, res) => {
    db.User.create(req.body.user)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  });
  //get all users
  app.get('/api/users', (req, res) => {
    db.User.find({}).then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  });
  //get one user
  app.get('/api/user/:id', (req, res) => {
    db.User.findOne({
        _id: req.params.id
      }).populate('activity')
      .then(data => res.status(422).json(data));
  });
  //delete user
  app.get('api/user/:id', (req, res) => {
    db.User.remove({
        _id: req.params.id
      })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  });
}
