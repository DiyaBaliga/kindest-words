/*const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const Reply = require('../models/replySchema');

router.get('/reply', (req, res, next) => {
    // This will return all the data, exposing only the id and action field to the client
    Reply.find({}, 'action')
      .then((data) => res.json(data))
      .catch(next);
  });
  
router.post('/reply', (req, res, next) => {
    if (req.body.action) {
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
  });*/