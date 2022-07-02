const express = require('express');
const path = require('path');
const app = express();
const port = 3000

const home = require('./application/controllers/home.controller');

// view engine setup
app.set('views', path.join(__dirname, 'application/views'));
app.set('view engine', 'ejs');

app.use('/', home)


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})