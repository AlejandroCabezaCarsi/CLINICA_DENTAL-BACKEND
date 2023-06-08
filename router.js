const router = require('express').Router(); 

const treatmentRouter = require('./views/treatmentRouter');
const rolesRouter = require('./views/rolesRouter');
const userRouter = require('./views/userRouter');

router.use('/roles', rolesRouter); 
router.use('/user', userRouter); 
router.use('/treatment', treatmentRouter)

module.exports = router