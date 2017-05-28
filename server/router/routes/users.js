const router = require('express').Router();
const usersController = require('../../controllers/index').users;

router.post('/', usersController.create);

module.exports = router;