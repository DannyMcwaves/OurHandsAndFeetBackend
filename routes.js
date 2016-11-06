const Router = require('express').Router;
const router = new Router();

const user  = require('./model/user/user-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to tipsy-ryde-backend API!' });
});

router.use('/user', user);
router.use('/auth',require('./auth'));

module.exports = router;
