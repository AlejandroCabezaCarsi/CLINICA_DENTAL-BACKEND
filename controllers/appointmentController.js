const { appointment, treatment, user, clinic, medic } = require("../models");
const jwt = require("jsonwebtoken");

const appointmentController = {};

appointmentController.createappointment = async (req, res) => {
  try {
    const {medicId, treatmentId, clinicId, date, comments } = req.body;

    const medicSelected = await medic.findByPk(medicId)

    if(!medicSelected){
      return res.status(400).json({
        success: true,
        message: "Medic not found"
      })
    }

    const userMedicSelected = medicSelected.userId

    const checkIfMedicIsActive = await user.findByPk(userMedicSelected)

    if (checkIfMedicIsActive.isActive === false){
      return res.status(400).json({
        message: "Medic not found"
      })
    }

    const treatmentSelected = await treatment.findByPk(treatmentId);

    if(!treatmentSelected){
      return res.status(400).json({
        success: true,
        message: "treatment not found"
      })
    }

    const clinicSelected = await clinic.findByPk(clinicId);

    if(!clinicSelected){
      return res.status(400).json({
        success: true,
        message: "Clinic not found"
      })
    }


    const createAppointment = await appointment.create({
      userId: req.userId,
      medicId: medicSelected.id,
      treatmentId: treatmentSelected.id,
      clinicId: clinicSelected.id,
      price: treatmentSelected.price,
      date,
      comments,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.json({
      message: "Appointment created",
      data: createAppointment,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Can't create an appointment",
      error: error.message,
    });
  }
};

appointmentController.deleteappointment = async (req, res) => {
  try {
    const results = await appointment.destroy({
      where: {
        id: req.body.id,
      },
    });

    return res.status(200).json({
      succes: true,
      message: "Appointment deleted correctly",
      data: results,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "can't delete the appointment",
      error: error.message,
    });
  }
};

appointmentController.updateappointment = async (req, res) => {
  try {
    const results = await appointment.update(
      {
        treatmentId: req.body.treatmentId,
        clinicId: req.body.clinicId,
        date: req.body.date,
        comments: req.body.comments,
      },
      {
        where: {
          userId: req.body.userId,
          id: req.body.userId,
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
      message: "can't update the appointment",
      error: error.message,
    });
  }
};

appointmentController.findAllappointments = async (req, res) => {
  try {
    const buscaCitas = await appointment.findAll({
      attributes: {
        exclude: [
          "userId",
          "clinicId",
          "updatedAt",
          "createdAt",
        ],
      },
      include: [
        {
          attributes: {
            exclude: ["roleId", "password", "updatedAt", "createdAt"],
          },
          model: user,
        },
        {
          attributes: {
            exclude: ["updatedAt", "createdAt"],
          },
          model: clinic,
        },
        {
          model: treatment,
          attributes: {
            exclude: ["updatedAt", "createdAt"],
          },

        },
      ],
    });

    return res.status(200).json({
      success: true,
      data: buscaCitas,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Get failed",
      error: error.message,
    });
  }
};

appointmentController.findAllappointmentsByUserId = async (req, res) => {
  try {

    const buscaCitas = await appointment.findAll({
      where: {
        userId: req.userId,
      },
      attributes: {
        exclude: [
          "userId",
          "treatmentId",
          "clinicId",
          "updatedAt",
          "createdAt",
        ],
      },

      include: [
        {
          attributes: {
            exclude: ["roleId", "password", "id", "updatedAt", "createdAt"],
          },
          model: user,
        },
        {
          attributes: {
            exclude: ["updatedAt", "createdAt"],
          },
          model: clinic,
        },
        {
          attributes: {
            exclude: ["updatedAt", "createdAt"],
          },
          model: treatment,
        },
      ],
    });

    if (buscaCitas.length === 0){
      return res.status(200).json({
        succes: true,
        message: "You don't have any appointment"
      })
    }

    return res.status(200).json({
      success: true,
      data: buscaCitas,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Get failed",
      error: error.message,
    });
  }
};


appointmentController.findAllappointmentsByMedicId = async (req, res) => {
  try {

    const buscaMedico = await medic.findOne({

      where: {
        userId: req.userId,
      }

    });

    const buscaCitas = await appointment.findAll({
      where: {
        medicId: buscaMedico.id
      },
      attributes: {
        exclude: [
          "userId",
          "clinicId",
          "updatedAt",
          "createdAt",
        ],
      },
      include: [
        {
          attributes: {
            exclude: ["roleId", "password", "id", "updatedAt", "createdAt"],
          },
          model: user,
        },
        {
          attributes: {
            exclude: ["updatedAt", "createdAt"],
          },
          model: clinic,
        },
        {
          attributes: {
            exclude: ["updatedAt", "createdAt"],
          },
          model: treatment,
        },
      ],
    })

    return res.status(200).json({
      success: true,
      data: buscaCitas,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Get failed",
      error: error.message,
    });
  }
};

module.exports = appointmentController;
