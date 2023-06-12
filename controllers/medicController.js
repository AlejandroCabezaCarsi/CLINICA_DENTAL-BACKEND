const {medic} = require('../models'); 

const medicController = {}

const bcrypt = require("bcrypt");

medicController.createMedic = async (req, res) => {
    try {

      if (req.body.password.length < 4) {
        return res.send("Password must be longer than 4 characters");
      }
  
      const newPassword = bcrypt.hashSync(req.body.password, 8);
  
      const newMedic = await medic.create({
        name: req.body.name,
        lastname: req.body.lastname,
        roleId: req.body.roleId,
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




module.exports = medicController