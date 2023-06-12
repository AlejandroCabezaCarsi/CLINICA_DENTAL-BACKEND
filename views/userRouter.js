const router = require ('express').Router();

const userController = require('../controllers/userController'); 
const isAdmin = require('../middlewares/isAdmin');
const isSuperAdmin = require('../middlewares/isSuperAdmin');

const auth = require('../middlewares/verifyToken');


router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.delete('/delete',isSuperAdmin, userController.deleteUser);
router.put('/update', auth, /*isAdmin ||*/ isSuperAdmin,  userController.updateUser);
router.get('/getUser', userController.getUser);
router.get('/getAllUsers', userController.getAllUsers);



module.exports = router