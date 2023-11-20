const User = require("../models/user.model");

module.exports.create = (req, res, next) => {
  User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    avatar: req.file?.path,
  })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        user.checkPassword(req.body.password).then((match) => {
          if (match) {
            req.session.userId = user.id;
            res.json(user);
          } else {
            res.status(401).json({ error: "unauthorized" });
          }
        });
      } else {
        res.status(401).json({ error: "unauthorized" });
      }
    })
    .catch(next);
};

module.exports.logout = (req, res, next) => {
  req.session.destroy();
  res.status(204).send();
};