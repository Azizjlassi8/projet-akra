// 1
const express = require('express');
const { register, login } = require('../Controllers/user');
const { registerValidation, validation, loginValidation } = require('../Middleware/validator');
const isAuth = require('../Middleware/isAuth');

// 2
const router = express.Router();

// routes
// register
router.post('/register',registerValidation(),validation,register);

// login
router.post('/login',loginValidation(),validation,login);

// current user
router.get('/current', isAuth, (req, res) => {
    res.send("You are authorized to pass ");
})

// 3
module.exports = router;

