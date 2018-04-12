const db = require('../models');

module.exports = function (app) {
  //create a user
  app.post('/api/user', (req, res) => {
    db.User.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  });
  //get all users
  app.get('/api/users', (req, res) => {
    db.User.find({}).then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  });
  //get one user with classes they're taking and/or teaching
  app.get('/api/user/:id', (req, res) => {
    db.User.findOne({
        _id: req.params.id
      }).populate('classesTeaching').populate('classTaking')
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
}
