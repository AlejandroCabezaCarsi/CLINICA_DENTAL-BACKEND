const router = require('express').Router(); 
const roleController = require('../controllers/roleController'); 



router.post('/create', roleController.createRole)
router.put('/update', roleController.updateRole)

module.exports = router