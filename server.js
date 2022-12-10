const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let searchQuery = req.query.search;
  res.send(`Hello World! You searched for ${searchQuery}`);
});
app.get('/chocolate', (req, res) => {
  let amount = req.query.amount;
  res.send(`You requested ${amount} units of chocolate`);
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

