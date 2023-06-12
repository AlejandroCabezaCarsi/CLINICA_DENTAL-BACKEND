const router = require('express').Router(); 
const medicController = require("../controllers/medicController");

router.post('/create', medicController.createMedic);
router.post('/login', medicController.loginMedic);



module.exports = router