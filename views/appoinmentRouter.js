const router = require('express').Router()

const appointmentController = require('../controllers/appointmentController');
const checkAdminOrSuperAdmin = require('../middlewares/checkIsAdminOrSuperAdmin');
const auth = require('../middlewares/verifyToken');

router.post('/create',auth, appointmentController.createappointment)
router.delete('/delete',auth, checkAdminOrSuperAdmin, appointmentController.deleteappointment)
router.put('/update',auth, checkAdminOrSuperAdmin, appointmentController.updateappointment)
router.get('/getAllappointmentsByUserId',auth, appointmentController.findAllappointmentsByUserId)
router.get('/getAppointmentByUserId',auth, appointmentController.findappointmentById)
router.get('/getAllappointmentsByMedicId',auth, checkAdminOrSuperAdmin, appointmentController.findAllappointmentsByMedicId)


module.exports = router