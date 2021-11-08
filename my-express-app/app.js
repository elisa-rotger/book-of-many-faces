var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gamesRouter = require('./routes/games');
var foldersRouter = require ('./routes/folders');
var foldRouter = require ('./routes/fold');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/client/build')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/games', gamesRouter);
app.use('/folders', foldersRouter);
app.use('/fold', foldRouter);

// Respond with index.html for unmatched routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build', 'index.html'));
});

module.exports = app;
