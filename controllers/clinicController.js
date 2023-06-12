const { clinic } = require("../models");

const clinicController = {};

clinicController.createClinic = async (req, res) => {
  try {
    const { address, number, email, city } = req.body;

    const newClinic = await clinic.create({
      address: address,
      number: number,
      email: email,
      city: city,
    });

    return res.status(201).json({
      success: true,
      message: "Clinic created",
      newTreatment: newClinic,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "can't create treatment",
      error: error.message,
    });
  }
};

clinicController.deleteClinic = async (req, res) => {
  try {
    const cancelClinic = await clinic.destroy({
      where: {
        id: req.body.id,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Clinic deleted correctly",
      results: cancelClinic,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "can't cancel Clinic",
      error: error.message,
    });
  }
};

clinicController.updateClinic = async (req, res) => {
  try {
    const { address, number, email, city, id } = req.body;

    const clinicUpdate = await clinic.update(
      {
        address: address,
        number: number,
        email: email,
        city: city,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.status(200).json({
      success: "true",
      message: "Clinic updated",
      clinicUpdate: clinicUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Update failed",
      error: error.message,
    });
  }
};

clinicController.getClinic = async (req, res) => {
  try {
    const getClinic = await clinic.findOne({
      where: {
        id: req.body.id,
      },
      attributes: ["address", "number", "email", "city"],
    });

    return res.status(200).json({
      success: "true",
      message: "Here you have the clinic",
      getClinic: getClinic,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Get clinic failed",
      error: error.message,
    });
  }
};

clinicController.getAllClinics = async (req, res) => {
  try {
    const getAllClinics = await clinic.findAll({
      attributes: ["id", "address", "number", "email", "city"],
    });

    return res.status(200).json({
      success: "true",
      message: "Here you have the clinics",
      getAllClinics: getAllClinics,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Get all clinics failed",
      error: error.message,
    });
  }
};

module.exports = clinicController;
