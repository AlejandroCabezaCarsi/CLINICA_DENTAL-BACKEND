const router = require('express').Router(); 

const rolesRouter = require('./views/rolesRouter')

router.use('/roles', rolesRouter); 

module.exports = router