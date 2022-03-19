const router = require('express').Router();
const { validateUsername, validateEmail, validatePassword } = require('../middlewares/validations');
const { generateToken } = require('../middlewares/token');

router.post('/register', validateUsername, validateEmail, validatePassword,
(_req, res) => res.status(201).json({ message: 'user created' }));

router.post('/login', validateEmail, validatePassword,
(_req, res) => res.status(200).json({ "token": `${generateToken()}` }));

module.exports = router;