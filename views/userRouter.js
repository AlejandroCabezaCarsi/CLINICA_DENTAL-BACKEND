const router = require ('express').Router();

const userController = require('../controllers/userController'); 


router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.delete('/delete', userController.deleteUser)
router.put('/update/:dni', userController.updateUser)

module.exports = router