const { user, role } = require("../models");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const userController = {};

//---CREATE USERS---//

userController.createUser = async (req, res) => {
  const { name, lastname, email, dni, phoneNumber } = req.body;

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

    const newUser = await user.create({
      name: name,
      lastname: lastname,
      email: email,
      password: newPassword,
      dni: dni,
      phoneNumber: phoneNumber,
      roleId: 4,
      isActive: true,
    });

    return res.status(200).json({
      success: true,
      message: "User created",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Create user went wrong",
      error: error.message,
    });
  }
};

//--- LOGIN USERS ---//

userController.loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const buscaUsuario = await user.findOne({
      where: {
        email: email,
      },
    });

    if (buscaUsuario.isActive === false) {
      return res.status(500).json({
        message:
          "You cancelled your account. If you want to reactivate your account send an email with your DNI and Email",
      });
    }

    if (!buscaUsuario) {
      return res.status(500).json({
        success: true,
        message: "Wrong credentials",
      });
    }

    const validPassword = bcrypt.compareSync(password, buscaUsuario.password);

    if (!validPassword) {
      return res.status(500).json({
        success: true,
        message: "Wrong credentials",
      });
    }

    const token = jwt.sign(
      {
        userId: buscaUsuario.id,
        roleId: buscaUsuario.roleId,
        email: buscaUsuario.email,
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

//--- DELETE USER BY SUPERADMIN OR ADMIN ---//

userController.SAOAdeleteUser = async (req, res) => {
  try {
    const results = await user.destroy({
      where: {
        name: req.body.name,
        dni: req.body.dni,
      },
    });
    return res.status(200).json({
      success: true,
      message: "User deleted correctly",
      results: results,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "can't cancel user",
      error: error.message,
    });
  }
};

//--- USER TO SET FALSE IN ISACTIVE ATTRIBUTE ---//

userController.isActiveFalse = async (req, res) => {
  try {
    const userId = req.userId;

    console.log(userId);

    const results = await user.update(
      {
        isActive: false,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "User deleted correctly",
      results: results,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "can't cancel user",
      error: error.message,
    });
  }
};

userController.updateUser = async (req, res) => {
  try {
    
    const { name, lastname, email, password, phoneNumber } = req.body;

    const compruebaEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!compruebaEmail.test(req.body.email)) {
      return res.status(400).json({
        success: false,
        message: "Email not valid",
      });
    }

    if (password.length < 4) {
      return res.send("Password must be longer than 4 characters");
    }

    const newPassword = bcrypt.hashSync(req.body.password, 8);

    const results = await user.update(
      {
        name: name,
        lastname: lastname,
        email: email,
        password: newPassword,
        phoneNumber: phoneNumber,
      },
      {
        where: {
          id: req.userId,
        },
      }
    );

    return res.status(200).json({
      success: "true",
      message: "User updated",
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

userController.getUser = async (req, res) => {
  try {
    const userId = req.userId;

    const buscaUsuario = await user.findByPk(userId, {
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

    return res.json({
      success: true,
      message: "This is your profile",
      data: buscaUsuario,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Get failed",
      error: error.message,
    });
  }
};

userController.getAllUsers = async (req, res) => {
  try {
    const buscaUsuarios = await user.findAll({
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
      data: buscaUsuarios,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Get failed",
      error: error.message,
    });
  }
};

module.exports = userController;
