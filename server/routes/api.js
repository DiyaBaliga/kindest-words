const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const Message = require('../models/message')

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


router.get('/message', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Message.find({}, 'message')
    .then((data) => res.json(data))
    .catch(next);
});

router.get('/message/:id', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Message.find({ _id: req.params.id }, 'message')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/message', (req, res, next) => {
  if (req.body.Message) {
    Message.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/message/:id', (req, res, next) => {
  Message.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;