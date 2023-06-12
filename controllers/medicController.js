const { medic, role } = require("../models");

const medicController = {};

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

medicController.createMedic = async (req, res) => {
  const compruebaEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!compruebaEmail.test(req.body.email)) {
    return res.status(400).json({
      success: false,
      message: "Email not valid",
    });
  }

  try {
    if (req.body.password.length < 4) {
      return res.send("Password must be longer than 4 characters");
    }

    const newPassword = bcrypt.hashSync(req.body.password, 8);

    const newMedic = await medic.create({
      name: req.body.name,
      lastname: req.body.lastname,
      roleId: 2,
      speciality: req.body.speciality,
      collegiateNumber: req.body.collegiateNumber,
      email: req.body.email,
      password: newPassword,
      phonenumber: req.body.phonenumber,
    });

    return res.json(newMedic);
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "can't create role",
      error: error.message,
    });
  }
};

medicController.loginMedic = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const buscaMedico = await medic.findOne({
      where: {
        email: email,
      },
    });

    if (!buscaMedico) {
      return res.status(500).json({
        success: true,
        message: "Wrong credentials",
      });
    }

    const validPassword = bcrypt.compareSync(password, buscaMedico.password);

    if (!validPassword) {
      return res.status(500).json({
        success: true,
        message: "Wrong credentials",
      });
    }

    const token = jwt.sign(
      {
        medicId: buscaMedico.id,
        roleId: buscaMedico.roleId,
        email: buscaMedico.email,
      },
      "zumitoDePiña",
      {
        expiresIn: "8h",
      }
    );

    return res.status(200).json({
      success: true,
      message: "User Logged",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Wrong credentials",
      error: error.message,
    });
  }
};

medicController.deleteMedic = async (req, res) => {
  try {
    const results = await medic.destroy({
      where: {
        collegiateNumber: req.body.collegiateNumber,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Medic deleted correctly",
      results,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "can't cancel medic",
      error: error.message,
    });
  }
};

medicController.updateMedic = async (req, res) => {
  try {
    const {
      name,
      lastname,
      email,
      password,
      phoneNumber,
      speciality,
      collegiateNumber,
    } = req.body;

    if (password.length < 4) {
      return res.send("Password must be longer than 4 characters");
    }

    const newPassword = bcrypt.hashSync(req.body.password, 8);

    const results = await medic.update(
      {
        name: name,
        lastname: lastname,
        email: email,
        password: newPassword,
        phoneNumber: phoneNumber,
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
    const collegiateNumber = req.body.collegiateNumber;
    const name = req.body.name;

    const buscaMedico = await medic.findOne({
      where: {
        collegiateNumber: collegiateNumber,
      },
      attributes: {
        exclude: ["password", "updatedAt", "createdAt", "roleId"],
      },

      include: [
        {
          attributes: {
            exclude: ["updatedAt", "createdAt"],
          },
          model: role,
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

medicController.getAllMedics = async (req, res) => {
  try {
    const buscaMedicos = await medic.findAll({
      attributes: {
        exclude: ["password", "updatedAt", "createdAt", "roleId"],
      },

      include: [
        {
          attributes: {
            exclude: ["updatedAt", "createdAt"],
          },
          model: role,
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
