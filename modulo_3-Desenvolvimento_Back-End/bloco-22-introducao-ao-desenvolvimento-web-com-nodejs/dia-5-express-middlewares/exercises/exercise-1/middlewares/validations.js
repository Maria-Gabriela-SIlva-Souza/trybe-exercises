const validateUsername = (req, res, next) => {
  const { username } = req.body;
  if (!username || username.length < 3) return res.status(400).json({ "message": "invalid username" });

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if(!email || !email.includes('@') || !email.includes('.com')) return res.status(400).json({ "message": "invalid email" });

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const passwordRegex = /^[0-9]*$/;

  if(
    !password ||
    !password.match(passwordRegex) ||
    password.length < 3 ||
    password.length > 8
  )
    return res.status(400).json({ message: 'invalid password' });

  next();
};

module.exports = {
  validateUsername,
  validateEmail,
  validatePassword,
};