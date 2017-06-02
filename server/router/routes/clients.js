const router = require('express').Router();
const clientsController = require('../../controllers/index').clients;

// Clients
router.post('/clients', clientsController.create);

module.exports = router;