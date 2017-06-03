const router = require('express').Router();
const clientsController = require('../../controllers/index').clients;

// Clients
router.post('/', clientsController.create);

module.exports = router;