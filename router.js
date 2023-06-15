const router = require("express").Router();

const treatmentRouter = require("./views/treatmentRouter");
const rolesRouter = require("./views/rolesRouter");
const userRouter = require("./views/userRouter");
const clinicRouter = require("./views/clinicRouter");
const medicRouter = require("./views/medicRouter");
const appointmentRouter = require("./views/appointmentRouter");

router.use(
    "/roles", 
    rolesRouter
);

router.use(
    "/user", 
    userRouter
);

router.use(
    "/treatment", 
    treatmentRouter
);

router.use(
    "/clinic", 
    clinicRouter
);

router.use(
    "/appointment", 
    appointmentRouter
);

router.use(
    "/medic", 
    medicRouter
);

module.exports = router;
