const router = require('express').Router(); 
const roleController = require('../controllers/roleController'); 



router.post('/create', roleController.createRole)

module.exports = router