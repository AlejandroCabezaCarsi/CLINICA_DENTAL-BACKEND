const router = require('express').Router(); 

const clinicController = require('../controllers/clinicController'); 

router.post('/create', clinicController.createClinic)

module.exports = router