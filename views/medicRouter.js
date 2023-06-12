const router = require('express').Router(); 
const medicController = require("../controllers/medicController");

router.post('/create', medicController.createMedic);
router.post('/login', medicController.loginMedic);
router.delete('/delete', medicController.deleteMedic);
router.put('/update', medicController.updateMedic);
router.get('/getOneMedic', medicController.getMedic);
router.get('/getAllMedics', medicController.getAllMedics);



module.exports = router