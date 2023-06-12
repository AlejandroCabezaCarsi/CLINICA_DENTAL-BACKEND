const router = require('express').Router(); 
const medicController = require("../controllers/medicController");

router.post('/create', medicController.createMedic)


module.exports = router