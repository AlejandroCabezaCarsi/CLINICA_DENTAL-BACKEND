const router = require("express").Router();

const appointmentController = require("../controllers/appointmentController");
const isSuperAdmin = require("../middlewares/isSuperAdmin");
const checkAdminOrSuperAdmin = require("../middlewares/checkIsAdminOrSuperAdmin");
const checkIsMedicOrAdminOrSuperAdmin = require("../middlewares/checkIsMedicOrAdminOrSuperAdmin");
const auth = require("../middlewares/verifyToken");

router.post(
  "/create",
  auth, 
  appointmentController.createappointment);
router.delete(
  "/delete",
  auth,
  checkAdminOrSuperAdmin,
  appointmentController.deleteappointment
);
router.put(
  "/update",
  auth,
  appointmentController.updateappointment
);
router.get(
  "/getAllAppointments",
  auth,
  checkAdminOrSuperAdmin,
  appointmentController.findAllappointments
);
router.get(
  "/getAllappointmentsByUserId",
  auth,
  appointmentController.findAllappointmentsByUserId
);
router.get(
  "/getAllappointmentsByMedicId",
  auth,
  appointmentController.findAllappointmentsByMedicId
);

router.post(
  "/getAppointmentsByDate", 
  auth,
  appointmentController.findAppointmentsByDate
)

router.post(
  "/getAppointmentsByDateUser",
  auth,
  appointmentController.findAppointmentsByDateUser
)

module.exports = router;
