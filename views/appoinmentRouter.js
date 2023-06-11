const router = require('express').Router()

const appoinmentController = require('../controllers/appoinmentController');

router.post('/create', appoinmentController.createAppoinment)


module.exports = router