const express = require('express');
const app = express(); // Create an instance of express called 'app'

app.get('/', (req, res) => {
  res.send({ hi:'there' })
});

const PORT = process.env.PORT || 5000; // If in deployment use env PORT, if in dev use 5000
app.listen(PORT, () => {
  console.log('App listening on port ', PORT)
});