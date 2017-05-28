const router = require('express').Router();
const jobDevelopersController = require('../controllers').jobDevelopers;
const clientsController = require('../controllers').clients;
const jobs = require('./jobs');
const users = require('./users');
const userTypes = require('./userTypes');
const jobDevelopers = require('./jobDevelopers');
const clients = require('./clients');

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