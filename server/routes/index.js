const jobsController = require('../controllers').jobs;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Employment Options API!',
  }));

  app.post('/api/jobs', jobsController.create);
  app.get('/api/jobs/:jobId', jobsController.getOne);
  app.get('/api/jobs', jobsController.getAll);
};