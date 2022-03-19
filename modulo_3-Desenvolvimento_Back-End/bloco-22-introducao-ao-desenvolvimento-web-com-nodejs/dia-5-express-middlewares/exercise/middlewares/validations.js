const validateUsername = (req, res) => {
  const { username } = req.body;
  if (!username || username >= 3) res.status(400).json({ "message": "invalid data" });

  next();
}

const validateEmail = (req, res) => {
  const { email } = req.body;
  if(!email || !email.includes('@') || !email.includes('.com')) res.status(400).json({ "message": "invalid data" });

  next();
}

const validatePassword = (req, res) => {
  const { password } = req.body;
  if(!password || typeof password != 'number' || password < 4 || password > 8) res.status(400).json({ "message": "invalid data" });

  next();
}

module.exports = {
  validateUsername,
  validateEmail,
  validatePassword,
};