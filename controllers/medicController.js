const { medic, user } = require("../models");

const medicController = {};

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

medicController.createMedic = async (req, res) => {
  const { userId, speciality, collegiateNumber } = req.body;

  try {
    const findMedic = await medic.findOne({
      where: {
        userId: userId,
      },
    });

    if (findMedic) {
      return res.status(400).json({
        success: true,
        message: "A dentist with that userId already exists",
      });
    }

    const newMedic = await medic.create({
      userId: userId,
      speciality: speciality,
      collegiateNumber: collegiateNumber,
    });

    const newRole = await user.update(
      {
        roleId: 3,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    return res.json({
      success: true,
      message: "Medic created and role updated",
      data: newMedic,
      data: newRole,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Create medic went wrong",
      error: error.message,
    });
  }
};

medicController.deleteMedic = async (req, res) => {
  try {
    const { collegiateNumber, userId } = req.body;

    console.log(userId);

    const deleteMedic = await medic.destroy({
      where: {
        collegiateNumber: collegiateNumber,
      },
    });

    const changeRole = await user.update(
      {
        roleId: 4,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Medic deleted correctly",
      data: deleteMedic,
      data: changeRole,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Can't cancel medic",
      error: error.message,
    });
  }
};

medicController.updateMedic = async (req, res) => {
  try {
    const { collegiateNumber, speciality } = req.body;

    const results = await medic.update(
      {
        speciality: speciality,
      },
      {
        where: {
          collegiateNumber: collegiateNumber,
        },
      }
    );

    return res.status(200).json({
      success: "true",
      message: "Medic updated",
      data: results,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Update failed",
      error: error.message,
    });
  }
};

medicController.getMedic = async (req, res) => {
  try {
    const name = req.body.name;
    const lastname = req.body.lastname;

    const buscaMedico = await user.findOne({
      where: {
        name: name,
        lastname: lastname,
        roleId: 3,
      },
      attributes: {
        exclude: [
          "password",
          "updatedAt",
          "createdAt",
          "roleId",
          "isActive",
          "phoneNumber",
          "dni",
        ],
      },

      include: [
        {
          attributes: {
            exclude: ["updatedAt", "createdAt"],
          },
          model: medic,
        },
      ],
    });

    return res.status(200).json({
      message: "Medic retrieved",
      data: buscaMedico,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Get failed",
      error: error.message,
    });
  }
};

medicController.getMedicByUserId = async (req, res) => {
  try {
    const id = req.body.id;

    const buscaMedico = await medic.findOne({
      where: {
        id: id
      },
      attributes: {
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      },
    });

    if (!buscaMedico) {
      return res.status(404).json({
        success: false,
        message: "Medic not found",
      });
    }

    const userId = buscaMedico.userId;

    const buscaUsuario = await user.findOne({
      where: {
        id: userId
      },
      attributes:  ["name","lastname","email"],
    });

    if (!buscaUsuario) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    buscaMedico.dataValues.user = buscaUsuario;

    return res.status(200).json({
      success: true,
      message: "Medic retrieved",
      data: buscaMedico,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Get failed",
      error: error.message,
    });
  }
};

module.exports = medicController;


medicController.getAllMedicsByUsers = async (req, res) => {
  try {
    const buscaMedicos = await user.findAll({
      where: {
        roleId: 3,
      },

      attributes: {
        exclude: [
          "password",
          "updatedAt",
          "createdAt",
          "roleId",
          "isActive",
          "phoneNumber",
          "dni",
        ],
      },

      include: [
        {
          attributes: {
            exclude: ["updatedAt", "createdAt"],
          },
          model: medic,
        },
      ],
    });

    return res.status(200).json({
      success: true,
      data: buscaMedicos,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Get failed",
      error: error.message,
    });
  }
};

medicController.SAOAgetAllMedics = async (req, res) => {
  try {
    const buscaMedicos = await user.findAll({
      where: {
        roleId: 3,
      },

      attributes: {
        exclude: ["password"],
      },

      include: [
        {
          model: medic,
        },
      ],
    });

    return res.status(200).json({
      success: true,
      data: buscaMedicos,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Get failed",
      error: error.message,
    });
  }
};

module.exports = medicController;
