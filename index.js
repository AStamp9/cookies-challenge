const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/login', (req, res) => {
  res.cookie('name', 'Andrew'); 
  res.send('Logged in!');
});

app.get('/hello', (req, res) => {
  const userName = req.cookies.name;
  if (userName) {
    res.send(`Welcome ${userName}!`);
  } else {
    res.send('Hello, guest!');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});