const router = require('express').Router(); 

const treatmentRouter = require('./views/treatmentRouter');
const rolesRouter = require('./views/rolesRouter');
const userRouter = require('./views/userRouter');
const clinicRouter = require('./views/clinicRouter');

router.use('/roles', rolesRouter); 
router.use('/user', userRouter); 
router.use('/treatment', treatmentRouter);
router.use('/clinic', clinicRouter);

module.exports = router