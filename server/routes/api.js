const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const User = require('../models/user')

router.get('/todos', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Todo.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/todos', (req, res, next) => {
  if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/todos/:id', (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/register', (req, res, next) => {
  if (req.body.username && req.body.password) {
    User.find({ username: req.body.username })
    .then(user => {
      if(user.length > 0){
        res.json({
          error: 'Username already exists'
        });
      }
      else{
        User.create(req.body)
          .then((data) => res.json(data))
          .catch(next);
      }
    })
    .catch(next);
  } 
  else {
    res.json({
      error: 'Please input a username/password',
    });
  }
 });
  
router.post('/login', (req, res, next) => {
  if(req.body.username && req.body.password){
    User.find({ username: req.body.username })
      .then(user => {
        if(user.length == 0){
          res.json({
            error: 'User not found'
          })
        }
        else if(user[0].password == req.body.password){
          res.json({
            user: user[0]._id,
          });
        }
        else{
          res.json({
            error: 'Incorrect username/password',
          });
        }
      })
      .catch(next);
  }
  else{
    res.json({
      error: 'Please input a username/password',
    });
  }
 }); 


module.exports = router;