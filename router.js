const router = require('express').Router(); 

const rolesRouter = require('./views/rolesRouter');
const userRouter = require('./views/userRouter');

router.use('/roles', rolesRouter); 
router.use('/user', userRouter)

module.exports = router