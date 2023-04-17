const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


router.get('/api/business', (req, res) => {
  const query = `SELECT * FROM business`;
  console.log(query);
  db.query(query)
    .then(data => {
      const businessList = data.rows;
      res.json({ businessList });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
