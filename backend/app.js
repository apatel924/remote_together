require('dotenv').config();
const { application } = require('express');
const Express = require('express');
const Morgan = require('morgan');
const App = Express();
const PORT = process.env.PORT || 3001;
const business = require('./routes/business')
const { Pool } = require('pg');

//add for testing
const db = require('./db/connection');


// middleware
App.use(Morgan('dev'));
App.use(Express.urlencoded({ extended: true }));
App.use(Express.static('public'));
App.use(Express.json());


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

// GET REQUEST FOR FAVOURITES
App.get('/api/favorites', (req, res) => {
  const query = `SELECT * FROM favorite`;
  console.log(query);
  db.query(query)
    .then(data => {
      const favorites = data.rows;
      res.json({ favorites });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
// GET REQUEST FOR REVIEWS
App.get('/api/review', (req, res) => {
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


//queryparams is hardcoded right now, will eventually add req.body to get real data
//in addreview func we will need a parameter could be called req
//the next lines will be req.body.something
const addReview = function (data) {
  const queryParams = [
    data.username,
    data.review_comment,
    data.review_rating
  ];
  

  //returning * just returns everything
  const queryString = `
  INSERT INTO review (username, review_comment, review_rating)
  VALUES ($1, $2, $3)
  RETURNING *;
  `;

//queryparams is an array that gets maps to $1, etc
console.log('starting post in database');
  return db
    .query(queryString, queryParams)
    //if successful
    .then(result => {
      console.log('result', result)
      return result.rows
    })
    //if not successful
    .catch(err => {
      console.log(err.meessage)
    })
}

App.post('/api/review', (req, res) => {
  console.log('server function hits');
  console.log('req', req.body);
//let body = JSON.parse(req.body);
//console.log(body);
  addReview(req.body)
    .then((result) => {

      console.log('result 92', result)
      //eventually will return this line
      res.status(200).json(result[0]);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

// GET request for login
App.get('/api/login', (req, res) => {
  const query = `SELECT * FROM users`;
  console.log('api/login hit')
  console.log('query', query);
    //need query for user but should we just leave this out?
  db.query(query)
    .then(data => {
      console.log('data from backend', data.rows)
      // const review = data.rows;
      // console.log('review', review)
      // res.json({ review });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


// POST request for register page
const addUser = function (data) {
  const queryParams = [
    data.username,
    data.email,
    data.password
  ];
  
  //returning * just returns everything
  const queryString = `
  INSERT INTO users (username, email, password)
  VALUES ($1, $2, $3)
  RETURNING *;
  `;

//queryparams is an array that gets maps to $1, etc
// console.log('addUser post in database');
  return db
    .query(queryString, queryParams)
    //if successful
    .then(result => {
      // console.log('result', result)
      // return result.rows
    })
    //if not successful
    .catch(err => {
      res.status(500).json({ error: err.message });
      console.log(err.meessage)
    })
}

App.post('/api/register', (req, res) => {
  // console.log('server addUser function hits');
  // console.log('req', req.body);
//let body = JSON.parse(req.body);
//console.log(body);
  addUser(req.body)
    .then((result) => {

      // console.log('result addUser', result)
      //eventually will return this line
      res.status(200).json({});
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});


App.post

App.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});