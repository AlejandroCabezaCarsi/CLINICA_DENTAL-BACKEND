const router = require('express').Router(); 

const roleController = require('../controllers/roleController'); 
const isSuperAdmin = require('../middlewares/isSuperAdmin');
const auth = require('../middlewares/verifyToken');



router.post('/create',auth ,isSuperAdmin, roleController.createRole)
router.put('/update',auth ,isSuperAdmin, roleController.updateRole)

module.exports = router