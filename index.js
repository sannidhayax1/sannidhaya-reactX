require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
app.get('/twitter', (req, res) => {
  res.send('Sannidhayadotcom');
});
app.get('/login', (req, res) => {
  res.send('<h1> please login at code with sannidhaya</h1>');
});
app.get('/youtube', (req, res) => {
  res.send('<h1> </h2>');
});

app.listen(process.env.Port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
