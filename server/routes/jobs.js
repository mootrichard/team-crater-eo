const router = require('express').Router();
const jobsController = require('../controllers').jobs;

// Jobs
router.post('/', jobsController.create);
router.get('/:jobId', jobsController.getOne);
router.get('/', jobsController.getAll);

module.exports = router;