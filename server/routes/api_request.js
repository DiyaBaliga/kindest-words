const express = require('express');
const router = express.Router();
const Request = require('../models/request')

// Get all requests
router.get('/request', (req, res, next) => {
  Request.find({})
    .then((data) => res.json(data))
    .catch(next);
});

// Get by request id
router.get('/request/:id', (req, res, next) => {
  Request.find({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

// Get by author id
router.get('/request/author/:author', (req, res, next) => {
  Request.find({ authorID: req.params.author })
    .then((data) => res.json(data))
    .catch(next);
});

router.get('/request/keyword/:keyword/:author', (req, res, next) => {
  Request.find( {
    $and: [
      { authorID: req.params.author },
      { $text: { $search: req.params.keyword } }
   ] } )
  .then((data) => res.json(data))
  .catch(next);
})

// Post a request
router.post('/request', (req, res, next) => {
  if (req.body.content) {
    Request.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

// Delete a request by request id
router.delete('/request/:id', (req, res, next) => {
  Request.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

// Delete requests by author id
router.delete('/request/author/:author', (req, res, next) => {
  Request.deleteMany({ authorID: req.params.author })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;