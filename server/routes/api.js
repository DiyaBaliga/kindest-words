const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.post('/register', (req, res, next) => {
  if (req.body.username && req.body.password) {
    User.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'Missing username/password',
    });
  }
 });
  
 router.post('/login', (req, res, next) => {
  User.find({ username: req.body.username })
    .then(user => {
      if(user[0].password == req.body.password){
        res.send('logged in');
      }
      else{
        res.send('incorrect password');
      }
    })
    .catch(next);
 });
 



module.exports = router;