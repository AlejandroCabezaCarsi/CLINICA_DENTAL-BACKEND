const router = require("express").Router();

const treatmentController = require("../controllers/treatmentController");
const isSuperAdmin = require("../middlewares/isSuperAdmin");
const auth = require("../middlewares/verifyToken");

router.post(
    "/create",
    auth, 
    isSuperAdmin, 
    treatmentController.createTreatment
);

router.delete(
  "/delete",
  auth,
  isSuperAdmin,
  treatmentController.deleteTreatment
);

router.put(
    "/update", 
    auth, 
    isSuperAdmin, 
    treatmentController.updateTreatment
);

router.get(
    "/findOne", 
    auth, 
    treatmentController.getTreatment
);

router.get(
  "/findAll",
  auth,
  isSuperAdmin,
  treatmentController.getAllTreatments
);

module.exports = router;
