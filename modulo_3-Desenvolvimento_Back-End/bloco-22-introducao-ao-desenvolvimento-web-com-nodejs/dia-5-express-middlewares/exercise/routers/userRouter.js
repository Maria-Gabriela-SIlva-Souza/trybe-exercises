const router = require('express').Router();
const { validateUsername, validateEmail, validatePassword } = require('../middlewares/validations');

router.post('/register', validateUsername, validateEmail, validatePassword,
(_req, res) => res.status(201).json({ message: 'user created' }));

module.exports = router;