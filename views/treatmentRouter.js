const router = require ('express').Router(); 

const treatmentController = require('../controllers/treatmentController'); 
const isSuperAdmin = require('../middlewares/isSuperAdmin');
const auth = require('../middlewares/verifyToken');

router.post('/create',/* auth, isSuperAdmin,*/ treatmentController.createTreatment); 
router.delete('/delete', treatmentController.deleteTreatment);
router.put('/update',treatmentController.updateTreatment);
module.exports = router
