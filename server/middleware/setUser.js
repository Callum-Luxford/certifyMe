// Make user available in all templates
module.exports = (req, res, next) => {
  res.locals.user = req.user || null;
  next();
};
