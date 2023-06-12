const { role } = require("../models");

const roleController = {};

roleController.createRole = async (req, res) => {
  try {
    const results = await role.create({
      role: req.body.role,
    });

    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "can't create role",
      error: error.message,
    });
  }
};

roleController.updateRole = async (req, res) => {
  try {
    const results = await role.update({
      role: req.body.role,
    });

    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "carnt create role",
      error: error.message,
    });
  }
};

module.exports = roleController;
