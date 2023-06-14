const router = require('express').Router()

const appointmentController = require('../controllers/appointmentController');
const isSuperAdmin = require('../middlewares/isSuperAdmin')
const checkAdminOrSuperAdmin = require('../middlewares/checkIsAdminOrSuperAdmin');
const checkIsMedicOrAdminOrSuperAdmin = require('../middlewares/checkIsMedicOrAdminOrSuperAdmin');
const auth = require('../middlewares/verifyToken');

router.post('/create',auth, appointmentController.createappointment)
router.delete('/delete',auth, checkAdminOrSuperAdmin, appointmentController.deleteappointment)
router.put('/update',auth, checkAdminOrSuperAdmin, appointmentController.updateappointment)
router.get('/getAllAppointments',auth, isSuperAdmin, appointmentController.findAllappointments)
router.get('/getAllappointmentsByUserId',auth, appointmentController.findAllappointmentsByUserId)
router.get('/getAllappointmentsByMedicId',auth, checkIsMedicOrAdminOrSuperAdmin , appointmentController.findAllappointmentsByMedicId)


module.exports = router