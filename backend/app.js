require('dotenv').config();
const { application } = require('express');
const Express = require('express');
const Morgan = require('morgan');
const App = Express();
const PORT = process.env.PORT || 3001;
const business = require('./routes/business')

//add for testing
const db = require('./db/connection');


// middleware
App.use(Morgan('dev'));
App.use(Express.urlencoded({ extended: true }));
App.use(Express.static('public'));


// Mount all resource routes does not work need help with this
App.use('/api/business', business)

// Get routes
App.get('/api', (req, res) => {
  res.json({ message: 'Remote Together API' });
});

// works but how do i make this modular? i made a routes folder and used app.use and required in but it doesn't work.
App.get('/api/business', (req, res) => {
  const query = `SELECT * FROM business`;
  console.log(query);
  db.query(query)
    .then(data => {
      const businessList = data.rows;
      // console.log('test', data.rows)
      res.json({ businessList });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


App.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});