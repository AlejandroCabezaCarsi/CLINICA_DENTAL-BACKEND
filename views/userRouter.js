const router = require ('express').Router();

const userController = require('../controllers/userController'); 

const auth = require('../middlewares/verifyToken');


router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.delete('/delete', userController.deleteUser);
router.put('/update', auth, userController.updateUser);

module.exports = router