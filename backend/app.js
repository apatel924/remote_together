require('dotenv').config();
const { application } = require('express');
const Express = require('express');
const Morgan = require('morgan');
const http = require('http');
const cors = require("cors");
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3001;
const App = Express();
const business = require('./routes/business')
const chat = require('./db/chat');
const { getAllChats, insertChatMessage } = require('./db/chat');

const server = http.createServer(App);
const io = new Server(server, {
 cors: {
   origin: "http://localhost:3000",
   methods: ["GET", "POST"],
   allowedHeaders: ["my-custom-header"],
   credentials: true
 }
});


//add for testing
const db = require('./db/connection');


// middleware
const corsOptions = {
 origin: 'http://localhost:3000',
 methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
 credentials: true,
 preflightContinue: false,
 optionsSuccessStatus: 204,
};


App.use(cors(corsOptions));
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


const addReview = function (data) {
 const queryParams = [
   data.username,
   data.review_comment,
   data.review_rating
 ];


 const queryString = `
 INSERT INTO review (username, review_comment, review_rating)
 VALUES ($1, $2, $3)
 RETURNING *;
 `;


 console.log('starting post in database');
 return db
   .query(queryString, queryParams)
   .then(result => {
     console.log('result', result)
     return result.rows
   })
   .catch(err => {
     console.log(err.meessage)
   })
}

App.post('/api/review', (req, res) => {
 console.log('server function hits');
 console.log('req', req.body);
 addReview(req.body)
   .then((result) => {
     console.log('result 92', result)
     res.status(200).json(result[0]);
   })
   .catch(err => {
     res.status(500).json({ error: err.message });
   });
});


// chat

App.get('/api/chat/:chatId', (req, res) => {
 const { chatId } = req.params;
 chat.getChatMessages(chatId)
   .then(chatMessages => res.json({ chatMessages }))
   .catch(err => res.status(500).json({ error: err.message }));
});

io.on('connection', (socket) => {
 console.log('a user connected');

 // Handle new chat messages
 socket.on('new_message', ({ chatId, message }) => {
  console.log('New message:', chatId, message);
  chat.insertChatMessage(chatId, 'username', message) // Replace 'username' with the actual username once you have user authentication set up
    .then((msg) => {
      // Broadcast the message to other users in the same chat room, except the sender
      socket.broadcast.to(chatId).emit('message', msg);
    })
    .catch(err => console.error(err.message));
});

<<<<<<< HEAD
 // Handle user joining a chat room
 socket.on('join_chat', (chatId) => {
   console.log('User joined chat:', chatId);
   socket.join(chatId);
 });

=======
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
>>>>>>> 2afb31db8809a6819d45e596a7e5f2fdafde7e42

 // Handle user leaving a chat room
 socket.on('leave_chat', (chatId) => {
   console.log('User left chat:', chatId);
   socket.leave(chatId);
 });

<<<<<<< HEAD
 socket.on('disconnect', () => {
   console.log('user disconnected');
 });
});

// different approach
App.get('/api/chats', async (req, res) => {
 try {
   const chats = await getAllChats();
   res.json({ chats });
 } catch (err) {
   console.error(err.message);
   res.status(500).json({ error: 'Internal Server Error' });
 }
});

// Add this route to create a new chat
App.post('/api/chats', async (req, res) => {
 try {
   const { title } = req.body;
   const now = new Date();
   const result = await db.query('INSERT INTO chats (title, created_at) VALUES ($1, $2) RETURNING id', [title, now]);
   res.status(201).json({ chatId: result.rows[0].id });
 } catch (error) {
   console.error(error.message);
   res.status(500).json({ error: 'Internal Server Error' });
 }
});

App.post('/api/chat/:id/message', async (req, res) => {
  const chatId = req.params.id;
  const { username, message } = req.body;

  try {
    const chatMessage = await insertChatMessage(chatId, username, message);
    io.to(chatId).emit('message', chatMessage); 
    res.status(201).json({ chatMessage });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
=======
App.post
>>>>>>> 2afb31db8809a6819d45e596a7e5f2fdafde7e42

server.listen(PORT, () => {
 console.log(`App listening at http://localhost:${PORT}`);
});