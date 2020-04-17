var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    session = require('express-session'),
    path = require('path');

var rootPath = path.normalize(__dirname + '/../');


module.exports = function(app) {
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(session({
    secret: 'single focus wolves', 
    resave:false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use(express.static(rootPath + '/dist'));




/* 02-23-2020 as

  router.post('/login', (req,res) => {
    // login the user and return the user object
    // if the login is successful
    req.session.email = user.email;
    req.session.role = user.role
  }
  
  
  
  
  
  
  
  
  );

*/











}