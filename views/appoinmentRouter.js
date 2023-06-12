const router = require('express').Router()

const appoinmentController = require('../controllers/appoinmentController');
const checkAdminOrSuperAdmin = require('../middlewares/checkIsAdminOrSuperAdmin');
const auth = require('../middlewares/verifyToken');

router.post('/create',auth, appoinmentController.createAppoinment)
router.delete('/delete',auth, appoinmentController.deleteAppoinment)
router.put('/update',auth, appoinmentController.updateAppoinment)
router.get('/getAllAppoinments',auth,checkAdminOrSuperAdmin, appoinmentController.findAllAppoinments)
router.get('/getAppointment',auth, appoinmentController.findAppoinment)


module.exports = router