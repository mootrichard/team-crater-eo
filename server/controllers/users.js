const User = require('./models').Job;

module.exports = {
  create(req, res) {
    const password  = req.body.password;

    return User
        .create({
          email: req.body.email,
          password: req.body.password
        })
  }
};