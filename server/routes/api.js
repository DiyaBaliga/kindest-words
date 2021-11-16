const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
//const Request = require('../models/request');
const Message = require('../models/message');
const Reply = require('../models/reply');

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

router.delete('/todos/:id', (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
});
router.delete('/message/:id', (req, res, next) => {
  Message.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.get('/reply', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Reply.find({})
    .then((data) => res.json(data))
    .catch(next);
});

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

router.delete('/reply', (req, res, next) => {
  Reply.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;