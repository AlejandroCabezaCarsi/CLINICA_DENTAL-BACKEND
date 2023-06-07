const router = require ('express').Router();

const userController = require('../controllers/userController'); 

router.post('/create', userController.createUser);

module.exports = router