const router = require('express').Router(); 

const clinicController = require('../controllers/clinicController'); 
const isSuperAdmin = require('../middlewares/isSuperAdmin');
const auth = require('../middlewares/verifyToken');

router.post('/create',auth,isSuperAdmin, clinicController.createClinic);
router.delete('/delete',auth,isSuperAdmin, clinicController.deleteClinic);
router.put('/update',auth,isSuperAdmin, clinicController.updateClinic);
router.get('/findOne',auth, clinicController.getClinic)
router.get('/findAll',auth, clinicController.getAllClinics)
module.exports = router