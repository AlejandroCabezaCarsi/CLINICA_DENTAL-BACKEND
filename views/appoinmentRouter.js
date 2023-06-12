const router = require('express').Router()

const appoinmentController = require('../controllers/appoinmentController');
const checkAdminOrSuperAdmin = require('../middlewares/checkIsAdminOrSuperAdmin');
const auth = require('../middlewares/verifyToken');

router.post('/create',auth, appoinmentController.createAppoinment)
router.delete('/delete',auth, checkAdminOrSuperAdmin, appoinmentController.deleteAppoinment)
router.put('/update',auth, checkAdminOrSuperAdmin, appoinmentController.updateAppoinment)
router.get('/getAllAppoinmentsByUserId',auth, appoinmentController.findAllAppoinmentsByUserId)
router.get('/getAppointmentByUserId',auth, appoinmentController.findAppoinmentById)
router.get('/getAllAppoinmentsByMedicId',auth, checkAdminOrSuperAdmin, appoinmentController.findAllAppoinmentsByMedicId)


module.exports = router