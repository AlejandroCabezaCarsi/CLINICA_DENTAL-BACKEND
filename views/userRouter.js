const router = require ('express').Router();

const userController = require('../controllers/userController'); 
const isAdmin = require('../middlewares/isAdmin');

const auth = require('../middlewares/verifyToken');


router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.delete('/delete', userController.deleteUser);
router.put('/update', auth, isAdmin,  userController.updateUser);

module.exports = router