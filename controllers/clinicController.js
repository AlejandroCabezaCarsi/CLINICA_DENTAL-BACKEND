const { clinic } = require("../models");

const clinicController = {}; 

clinicController.createClinic = async (req,res) => {

    try {
        
        const {address, number, email, city } = req.body

        const newClinic = await clinic.create (
            {
                address: address, 
                number: number, 
                email: email, 
                city: city 
            }
        )

        return res.json(
            {
                success:true,
                message: "Clinic created", 
                newTreatment: newClinic
            }
        )


    } catch (error) {
        return res.status(500).json({ 

            success: true,
            message: "can't create treatment hola",
            error: error.message

        }); 
    }

}

clinicController.deleteClinic = async (req,res) => {

    try {
        const cancelClinic = await clinic.destroy({
            where: {
                id: req.body.id,
            }
        })
        return res.json(
            {
                success:true,
                message: "Clinic deleted correctly",
                results: cancelClinic
            }
        )
    } catch (error) {
        return res.status(500).json({ 

            success: true,
            message: "can't cancel Clinic",
            error: error.message
        });
    }
}

clinicController.updateClinic = async (req,res) => {

    try {

        const { address, number, email, city, id} = req.body 
        

        const clinicUpdate = await clinic.update(
        {
            address: address, 
            number: number,
            email: email, 
            city: city
        },
        {
            where: {
                id: id
            }
        })

        return res.json(
            {
                success: "true",
                message: "Clinic updated",
                clinicUpdate: clinicUpdate
                
            
            }
        )
        
    } catch (error) {
        return res.status(500).json({ 

            success: true,
            message: "Update failed",
            error: error.message
        });
    }
}


module.exports = clinicController