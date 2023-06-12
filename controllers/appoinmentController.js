const {appoinment, treatment, user, clinic} = require('../models');
const jwt = require("jsonwebtoken");



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
            message:"Appointment created",
            data: createAppointment
        })
        } catch (error) {

            return res.status(500).json({ 

                success: true,
                message: "Can't create an appoinment",
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

        return res.status(200).json({
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

        return res.status(200)json(
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

        return res.status(200).json({
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

appoinmentController.findAllAppoinmentsByUserId = async (req,res) =>{

    try {

        const bearerToken = req.headers.authorization;

        if (!bearerToken) {
          return res.status(401).json({
            success: false,
            message: "Access denied. Token is missing.",
          });
        }

        const token = bearerToken.split(" ")[1];
        const decoded = jwt.verify(token, "zumitoDePiña");
        const userId = decoded.userId;

        const buscaCitas = await appoinment.findAll({

            where: {
                userId:userId
            },

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

        return res.status(200).json({
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

appoinmentController.findAppoinmentById = async (req,res) => {
    
    try {
        const bearerToken = req.headers.authorization;

        if (!bearerToken) {
          return res.status(401).json({
            success: false,
            message: "Access denied. Token is missing.",
          });
        }

        const token = bearerToken.split(" ")[1];
        const decoded = jwt.verify(token, "zumitoDePiña");
        const userId = decoded.userId;

        const findAppointment = await appoinment.findOne({

            

            where: {

                userId:userId,  
                date: req.body.date
            },

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

        return res.status(200).json({
            success: true, 
            data: findAppointment
        })

    } catch (error) {
        return res.status(500).json({ 

            success: true,
            message: "Get failed",
            error: error.message
        });
    }
}

appoinmentController.findAllAppoinmentsByMedicId = async (req,res) =>{

    try {

        const bearerToken = req.headers.authorization;

        if (!bearerToken) {
          return res.status(401).json({
            success: false,
            message: "Access denied. Token is missing.",
          });
        }

        const token = bearerToken.split(" ")[1];
        const decoded = jwt.verify(token, "zumitoDePiña");
        const medicId = decoded.medicId;

        const buscaCitas = await appoinment.findAll({

            where: {
                medicId: medicId
            },

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

        return res.status(200).json({
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