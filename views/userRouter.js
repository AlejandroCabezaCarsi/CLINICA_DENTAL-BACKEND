const router = require ('express').Router();

const userController = require('../controllers/userController'); 
const checkAdminOrSuperAdmin = require('../middlewares/checkIsAdminOrSuperAdmin');
const isAdmin = require('../middlewares/isAdmin');
const isSuperAdmin = require('../middlewares/isSuperAdmin');

const auth = require('../middlewares/verifyToken');


router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.delete('/SAOAdelete',auth, checkAdminOrSuperAdmin, userController.SAOAdeleteUser);
// --- PONER USUARIO INACTIVO --- //
router.put('/delete',auth, userController.isActiveFalse);
router.put('/update',auth, userController.updateUser);
router.get('/getUser',auth, userController.getUser);
router.get('/getAllUsers',auth, userController.getAllUsers);



module.exports = router