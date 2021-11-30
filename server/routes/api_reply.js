const express = require('express');
const router = express.Router();
const Reply = require('../models/reply');

//Post a reply
router.post('/reply', (req, res, next) => {
  if (req.body.content) {
    Reply.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

// Get all requests
router.get('/reply', (req, res, next) => {
  Reply.find({})
    .then((data) => res.json(data))
    .catch(next);
});
//Get a reply by reply ID
router.get('/reply/:id', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Reply.find({_id: req.params.id})
    .then((data) => res.json(data))
    .catch(next);
});
  
//Delete by reply ID
router.delete('/reply/:id', (req, res, next) => {
  Reply.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

//Delete by reply authorID
router.delete('/reply/author/:author', (req, res, next) => {
  Reply.deleteMany({ authorID: req.params.author })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;