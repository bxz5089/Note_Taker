const express = require('express');
const path = require('path');
const fs = require("fs");
const uuid = require('./helpers/uuid');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/pages/404.html'))
// );

require('./routes/routes')(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);