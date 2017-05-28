const router = require('express').Router();
const userTypesController = require('../controllers').userTypes;

// User Types
router.post('/', userTypesController.create);

module.exports = router;