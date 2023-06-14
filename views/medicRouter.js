const router = require('express').Router(); 
const medicController = require("../controllers/medicController");
const isSuperAdmin = require('../middlewares/isSuperAdmin');
const auth = require('../middlewares/verifyToken');

router.post('/create',auth,isSuperAdmin, medicController.createMedic);
router.delete('/delete',auth,isSuperAdmin, medicController.deleteMedic);
router.put('/update',auth,isSuperAdmin, medicController.updateMedic);
router.get('/getOneMedic',auth, medicController.getMedic);
router.get('/getAllMedics',auth, medicController.getAllMedicsByUsers);



module.exports = router