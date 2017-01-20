const Router = require('express').Router;
const router = new Router();
const user  = require('./model/user/user-router');

function authenticate(req, res, next) {
  if (req.headers.origin === process.env.AllowUrl) {
    next();
  } else {
    res.redirect('/');
  }
}


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to Our Hands and Feet API!' });
});
router.all('/*', authenticate, (req, res, next) => {
  next();
});
router.use('/user', user);
router.use('/auth', require('./auth'));

module.exports = router;
