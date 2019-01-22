const { Router } = require('express');

const router = Router();

const connection = require('../helpers/db');

/* GET index page. */
router.get('/api', (req, res) => {
  connection.query('SELECT * FROM client', (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

router.get('/api/contacts/:id', (req, res) => {
  connection.query(`SELECT * FROM client WHERE id=${req.params.id}`, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

router.put('/api/contacts/:id', (req, res) => {
  connection.query(`UPDATE client SET ? WHERE id=${req.params.id}`, req.body, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

router.post('/api/contacts/', (req, res) => {
  connection.query('INSERT client SET ?', req.body, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

router.delete('/api/contacts/:id', (req, res) => {
  connection.query(`DELETE FROM client WHERE id = ${req.params.id} `, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

module.exports = router;
