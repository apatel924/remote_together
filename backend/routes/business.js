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


router.get('/api/review', (req, res) => {
  const query = `SELECT * FROM review`;
  console.log(query);
  db.query(query)
    .then(data => {
      const review = data.rows;
      res.json({ review });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

    
    
});


// router.post('/api/:id/delete', (req, res) => {
//   if (urlDatabase[req.params.id].userID === req.session.user_id) {
//     delete urlDatabase[req.params.id];
//     res.redirect("/urls");
//   } else {
//     res.status(403).send("Not allowed.");
//   }
// });

// module.exports = router;
