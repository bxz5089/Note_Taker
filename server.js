const express = require('express');
const path = require('path');
const fs = require("fs");
const uuid = require('./helpers/uuid');
const api = require('./routes/apiRoute.js');
const html = require('./routes/htmlRoute.js')


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);