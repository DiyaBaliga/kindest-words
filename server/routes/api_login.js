const express = require('express');
const router = express.Router();
const User = require('../models/user');

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
        req.body.flagged = false;
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
          if(user[0].flagged){
            res.json({
              error: user[0].username + " was reported for misconduct."
            });
          }
          else{
            res.json({
              user: user[0]._id,
            });
          }
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

router.post('/report/:id', (req, res, next) => {
  User.findOneAndUpdate(
    {"_id" : req.params.id},
    { "flagged" : true },
    { returnOriginal: false})
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
