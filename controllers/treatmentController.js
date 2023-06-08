const {treatment} = require('../models'); 

const treatmentController = {}; 

treatmentController.createTreatment = async (req,res) => {

    try {
        
        const { name,price,duration } = req.body

        const newTreatment = await treatment.create (
            {
                name: name,
                price: price,
                duration : duration
            }
        )

        return res.json(
            {
                success:true,
                message: "Treatment created", 
                newTreatment: newTreatment
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

module.exports = treatmentController