const jobsController = require('../controllers').jobs;
const usersController = require('../controllers').users;
const userTypesController = require('../controllers').userTypes;
const jobDevelopersController = require('../controllers').jobDevelopers;
const clientsController = require('../controllers').clients;

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

  // Job Developers
  app.post('/api/jobDevelopers', jobDevelopersController.create);
  app.get('/api/jobDevelopers/:jobDeveloperId', jobDevelopersController.getOne);
  app.get('/api/jobDevelopers', jobDevelopersController.getAll);

  // Clients
  app.post('/api/clients', clientsController.create);
  app.get('/api/clients/', clientsController.getAll);
  app.get('/api/clients/:id', clientsController.getOne);
};
