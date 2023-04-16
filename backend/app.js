require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/api', (req, res) => {
  res.json({ message: 'Remote Together API' });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});