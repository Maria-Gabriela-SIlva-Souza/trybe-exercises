const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  const tokenRegex = !/^[a-zA-Z0-9]{12}$/;
  console.log(token)
  if (!token || tokenRegex.test(token))
    return res.status(401).json({ message: 'invalid token' });
  
    next();
  };
  
  module.exports = { validateToken };