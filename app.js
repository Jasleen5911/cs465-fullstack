<<<<<<< HEAD
const express = require("express");

    const app = express();
    const port = 3000;

    
=======
require('./app_server/db');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tripsRouter = require('./routes/trips');
var app = express();
>>>>>>> 98325da (Initial commit - add project files)

    //require the controller
    const homeController = require("./app_server/controllers/homeController");
    const travelRoutes= require("./app_server/routes/travel");
    app.set("view engine", "hbs");
    app.set("views", __dirname + "/views");

<<<<<<< HEAD
    app.get("/", homeController.home);
    app.get("/about", (req, res)=>{
        res.render("about", {title:"About Us", description: "This is the about page."});
=======
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/trips', tripsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
>>>>>>> 98325da (Initial commit - add project files)
});

app.get("/contact", (req, res) => {
     res.render("contact", {title:"Contact Us", description: "This is the contact page."});
});

    app.use(travelRoutes);
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);


    });
