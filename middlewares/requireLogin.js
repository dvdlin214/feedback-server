module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).status({ error: 'You must be logged in!' });
  }

  next();
};
