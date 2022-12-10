const express = require('express');
const app = express();

// define a route for the GET request
app.get('/', (req, res) => {
  // return a list of users in JSON format
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]);
});

// start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
