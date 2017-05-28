const router = require('express').Router();
const jobDevelopersController = require('../controllers').jobDevelopers;

// Job Developers
router.post('/', jobDevelopersController.create);
router.get('/:job-developer-id', jobDevelopersController.getOne);
router.get('/', jobDevelopersController.getAll);

module.exports = router;