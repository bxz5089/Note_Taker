const express = require ('express');
const htmlRoute = require ('./htmlRoute');
const apiRoute = require ('./apiRoute');

const app = express ();

app.use ('/app', htmlRoute);
app.use ('/app', apiRoute);

module.exports = app;