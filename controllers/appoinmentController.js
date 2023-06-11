const {appoinment} = require('../models');

const appoinmentController = {}; 

appoinmentController.createAppoinment = async (req,res) => {

    try {
        // Obtén los datos de la solicitud
        const { userId, medicId, treatmentId, clinicId, date, comments } = req.body;
    
        // Crea la cita en la base de datos
        const appointment = await appoinment.create({
            userId,
            medicId,
            treatmentId,
            clinicId,
            date,
            comments,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    
        // Carga los datos relacionados utilizando consultas de Sequelize
        // const createdAppoinment = await appoinment.findByPk(appointment.id, {
        // include: [
        //     { model: user, attributes: ['name'] },
        //     /*{ model: Doctor, attributes: ['name'] },*/
        //     { model: treatment },
        //     { model: clinic },
        //     ],
        // });
    
        // Responde con la cita creada y los datos relacionados
        // res.json(createdAppoinment);
        res.json({
            message:"PRUEBAAAAA",
            data
        })
        } catch (error) {

        // Manejo de errores
        console.error(error);
        res.status(500).json({ message: 'Error creating appointment' });
      }
    };

// try {

//     const {userId, medicId, treatmentId, clinicId, date} = req.body

//     const createAppoinment = await appoinment.create({

//         userId: userId, 
//         medicId: medicId, 
//         treatmentId: treatmentId, 
//         clinicId: treatmentId, 
//         date: date

//     })

//     return res.json({

//         success: true,
//         message: "Appoinment created correctly",
//         data: createAppoinment

//     })
// } catch (error) {
    
// }
// }


module.exports = appoinmentController