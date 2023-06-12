const router = require('express').Router()

const appoinmentController = require('../controllers/appoinmentController');
const checkAdminOrSuperAdmin = require('../middlewares/checkIsAdminOrSuperAdmin');
const auth = require('../middlewares/verifyToken');

router.post('/create',auth, appoinmentController.createAppoinment)
router.delete('/delete',auth, appoinmentController.deleteAppoinment)
router.put('/update',auth, appoinmentController.updateAppoinment)
router.get('/getAllAppoinmentsByUserId',auth, appoinmentController.findAllAppoinmentsByUserId)
router.get('/getAppointmentByUserI',auth, appoinmentController.findAppoinmentById)
router.get('/getAllAppoinmentsByMedicId',auth, appoinmentController.findAllAppoinmentsByMedicId)


module.exports = router