const router = require('express').Router(); 

const clinicController = require('../controllers/clinicController'); 

router.post('/create', clinicController.createClinic);
router.delete('/delete', clinicController.deleteClinic);
router.put('/update', clinicController.updateClinic);

module.exports = router