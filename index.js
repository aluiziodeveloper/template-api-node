const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello Developer');
});

app.listen(3333, '0.0.0.0');
