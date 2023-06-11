const router = require('express').Router()

const appoinmentController = require('../controllers/appoinmentController');

router.post('/create', appoinmentController.createAppoinment)
router.delete('/delete', appoinmentController.deleteAppoinment)


module.exports = router