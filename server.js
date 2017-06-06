/*
* Write your Express server in this file as described in README.md.
*/
var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var movieData = require('./movieData');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res, next) {

  var templateArgs = {
    // FIXME: render args from home page
  };

  res.render('mainPage', templateArgs);

});

app.get('/movies/:index', function (req, res, next) {
  console.log("== url params for request:", req.params.index);
  var index = req.params.index;
  var movieData = sData[index];// FIXME: this will need to change as index will be the movie name
  console.log(movieData);

  if (movieData) {
    var templateArgs = {
      // FIXME: render args for single page
    }
    res.render('moviePage', templateArgs);
  }
  else {
    next();
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
  res.status(404).render('404Page');
});

// Start the server listening on the specified port.
app.listen(port, function () {
  console.log("== Server listening on port", port);
});
