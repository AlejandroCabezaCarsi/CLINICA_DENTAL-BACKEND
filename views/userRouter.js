const router = require ('express').Router();

const userController = require('../controllers/userController'); 
const { route } = require('./rolesRouter');

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.delete('/delete', userController.deleteUser)

module.exports = router