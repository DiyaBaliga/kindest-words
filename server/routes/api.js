const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const Request = require('../models/request')

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

// Get all requests
router.get('/request', (req, res, next) => {
  Request.find({}, 'request')
    .then((data) => res.json(data))
    .catch(next);
});

// Get by request id
router.get('/request/:id', (req, res, next) => {
  Request.find({ _id: req.params.id }, 'request')
    .then((data) => res.json(data))
    .catch(next);
});

// Post a request
router.post('/request', (req, res, next) => {
  console.log(req.body.Request);
  console.log("test");
  if (req.body.Request) {
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

module.exports = router;