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




module.exports = clinicController