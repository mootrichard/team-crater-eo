const jobsController = require('../controllers').jobs;
const usersController = require('../controllers').users;
const userTypesController = require('../controllers').userTypes;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Employment Options API!',
  }));

  // Jobs
  app.post('/api/jobs', jobsController.create);
  app.get('/api/jobs/:jobId', jobsController.getOne);
  app.get('/api/jobs', jobsController.getAll);

  // Users
  app.post('/api/users', usersController.create);

  // User Types
  app.post('/api/userTypes', userTypesController.create);
};