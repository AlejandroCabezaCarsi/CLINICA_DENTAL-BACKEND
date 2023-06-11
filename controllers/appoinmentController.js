const {appoinment, treatment, user, clinic} = require('../models');


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

appoinmentController.updateAppoinment = async (req,res) => {

    try {
        
        const results = await appoinment.update({
            treatmentId: req.body.treatmentId, 
            clinicId: req.body.clinicId, 
            date: req.body.date,
            comments: req.body.comments
        },
        {
            where: {
                userId: req.body.userId,
                id: req.body.userId
            }
        })

        return res.json(
            {
                success: "true",
                message: "User updated",
                data: results
                
            
            })

    } catch (error) {
        return res.status(500).json({ 

            success: true,
            message: "can't update the appoinment",
            error: error.message

        });
    }
}

appoinmentController.findAllAppoinments = async (req,res) =>{

    try {
        const buscaCitas = await appoinment.findAll({

            attributes:{
                exclude: ["userId", "treatmentId", "clinicId", "updatedAt","createdAt"]
            },
            
            include: [
                {
                    attributes: {
                        exclude: ["roleId", "password", "id","updatedAt","createdAt"]
                    },
                    model: user,
                },
                {
                    attributes: {
                        exclude: ["updatedAt","createdAt"]
                    },
                    model: clinic,
                }, 
                {
                    attributes: {
                        exclude: ["updatedAt","createdAt"]
                    },
                    model: treatment,
                }
            ]
        })

        return res.json({
            success: true,
            data: buscaCitas
        })
    } catch (error) {
        return res.status(500).json({ 

            success: true,
            message: "Get failed",
            error: error.message
        });
    }


}

module.exports = appoinmentController