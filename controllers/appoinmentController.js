const {appoinment} = require('../models');

const appoinmentController = {}; 

appoinmentController.createAppoinment = async (req,res) => {

    try {

        const { userId, medicId, treatmentId, clinicId, date, comments } = req.body;
    
        const createAppointment = await appoinment.create({
            userId,
            medicId,
            treatmentId,
            clinicId,
            date,
            comments,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    
        res.json({
            message:"A",
            data: createAppointment
        })
        } catch (error) {

            return res.status(500).json({ 

                success: true,
                message: "can't create an appoinment",
                error: error.message
    
            });
      }
    };

appoinmentController.deleteAppoinment = async (req,res) => {

    try {
        const results = await appoinment.destroy({
            where: {
                id: req.body.id,
            }
        })

        return res.json({
            succes: true, 
            message: "Appointment deleted correctly",
            data: results
        })
    } catch (error) {
        return res.status(500).json({ 

            success: true,
            message: "can't delete the appoinment",
            error: error.message

        });
    }


}

module.exports = appoinmentController