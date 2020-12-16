const express = require('express');
const router = express.Router();

const db = require('../Models');

router.get('/', (req, res) => {
  db.Awakedb.find()
    .then((response) => {
      res.status(200).json({ response });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get('/:name', (req, res) => {
  db.Awakedb.findOne({ fname: req.params.name })
    .then((response) => {
      res.status(200).json({ response });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post('/', (req, res) => {
  db.Awakedb.create(req.body)
    .then((response) => {
      res.status(201).json({ response });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put('/:name', (req, res) => {
  db.Awakedb.updateOne({ fname: req.params.name }, { fname: req.body.name })
    .then(() => {
      res.status(200);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete('/:name', (req, res) => {
  db.Awakedb.deleteOne({ fname: req.params.name })
    .then(() => {
      res.status(200);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
