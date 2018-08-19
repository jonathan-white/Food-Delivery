const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Location
      .find(req.query)
      .populate('menu.categories')
      .populate('menu.items')
      .populate('reviews')
      .sort({ display_order: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllShowIDsOnly: function(req, res) {
    db.Location
      .find(req.query)
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel.map(l => ({
          _id: l._id,
          title: l.title
        })
      )))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Location
      .find({_id: req.params.id})
      .populate('menu.categories')
      .populate('menu.items')
      .populate('reviews')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Location
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Location
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Location
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
