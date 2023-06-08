const router = require('express').Router(); 

const clinicController = require('../controllers/clinicController'); 

router.post('/create', clinicController.createClinic);
router.delete('/delete', clinicController.deleteClinic);
router.put('/update', clinicController.updateClinic);
router.get('/findOne', clinicController.getClinic)
router.get('/findAll', clinicController.getAllClinics)
module.exports = router