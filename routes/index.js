/***
 * File name: routes index.js
 * Author's name: Nguyen Huynh Quang Vinh
 * StudentID: 301214805
 * Web App name: Porfolio Website - Assignment 2
 * Date: Oct 31st, 2022
 */

var express = require('express');
var router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");
let indexController = require("../controllers/index");
let userModel = require("../models/user");
let User = userModel.User; //alias

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',});
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About',});
});

/* GET Project page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Projects',});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services',});
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact',});
});

/* POST Contact page and return to Home Page. */
router.post('/contact/submit', function(req, res, next) {
  res.redirect('/');
});

/* GET Route for displaying the Login page */
router.get("/login", indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post("/login", indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get("/register", indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post("/register", indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get("/logout", indexController.performLogout);

module.exports = router;
