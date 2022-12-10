const express = require('express');
const app = express();

// define a route for the GET request
app.get('/users', (req, res) => {
  // extract the query string from the request
  const search = req.query.search;

  // return a list of users that match the search term in JSON format
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ].filter(user => user.name.includes(search)));
});

// start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

