const router = require('express').Router();
const jobs = require('./routes/jobs');
const users = require('./routes/users');
const userTypes = require('./routes/userTypes');
const jobDevelopers = require('./routes/jobDevelopers');
const clients = require('./routes/clients');
const passport = require('passport');
require('../config/passport')(passport);

router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the Employment Options API!',
}));

// Jobs
router.use('/jobs', jobs);

// Users
router.use('/users', users);

// User Types
router.use('/user-types', userTypes);

// Job Developers
router.use('/job-developers', jobDevelopers);

// Clients
router.use('/clients', clients);

module.exports = router;