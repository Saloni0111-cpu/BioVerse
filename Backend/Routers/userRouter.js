const router = require('express').Router();
const{login, signup} = require('../Controllers/userController');
const {loginValidation, signupValidation} = require('../Middlewares/userValidation');

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation ,signup);

module.exports = router;