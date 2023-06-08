const router = require('express').Router(); 

const clinicController = require('../controllers/clinicController'); 

router.post('/create', clinicController.createClinic);
router.delete('/delete', clinicController.deleteClinic)

module.exports = router