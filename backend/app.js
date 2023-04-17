require('dotenv').config();
const Express = require('express');
const Morgan = require('morgan');
const App = Express();
const PORT = process.env.PORT || 3001;
const db = require('./db/connection');

App.use(Morgan('dev'));
App.use(Express.urlencoded({ extended: true }));
App.use(Express.static('public'));

// Get routes
App.get('/api', (req, res) => {
  res.json({ message: 'Remote Together API' });
});

App.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});