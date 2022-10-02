var express = require('express');
var router = express.Router();

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

/* GET Products page. */
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

module.exports = router;
