const port = process.env.PORT || 3333;

const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const app = express();

app.use(cors());

app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.listen(port, function () {
  console.log(`BACKEND is running on port ${port}.`)
});