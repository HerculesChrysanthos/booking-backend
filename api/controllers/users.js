const mongoose = require('mongoose')

const User = require('../models/user')

// exports.getUsers = (req, res, next) => {

// };

exports.registerUser = (req, res, next) => {
  const user = new User({
    userId: new mongoose.Types.ObjectId(),
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin
  })

  user
    .save()
    .then(result => {
      const response = {
        id: result.id,
        name: result.name,
        surname: result.surname,
        email: result.email,
        isAdmin: result.isAdming
      }
      res.status(201).json(response)
    })
    .catch(err => {
      if ('email' in err.keyPattern) {
        res.status(409).json({
          message: 'Mail already exists.'
        })
      } else {
        res.status(500).json({
          error: err
        })
      }
    })
}
