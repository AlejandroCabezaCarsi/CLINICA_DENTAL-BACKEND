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

        return res.status(200).json(
            {
                success:true,
                message: "Treatment created", 
                newTreatment: newTreatment
            }
        )


    } catch (error) {
        return res.status(500).json({ 

            success: true,
            message: "can't create treatment",
            error: error.message

        }); 
    }

}

treatmentController.deleteTreatment = async (req,res) => {

    try {
        const results = await treatment.destroy({
            where: {
                name: req.body.name,
            }
        })
        return res.status(200).json(
            {
                success:true,
                message: "Treatment deleted correctly",
                results
            }
        )
    } catch (error) {
        return res.status(500).json({ 

            success: true,
            message: "can't cancel treatment",
            error: error.message
        });
    }
}

treatmentController.updateTreatment = async (req,res) => {

    try {

        const { name, price, duration, id} = req.body 
        

        const results = await treatment.update(
        {
            name: name,
            price: price,
            duration: duration
        },
        {
            where: {
                id: id
            }
        })

        return res.status(200).json(
            {
                success: "true",
                message: "Treatment updated",
                results: results
                
            
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

treatmentController.getTreatment = async (req, res) => {
    try {
        
        const buscaTratamientos = await treatment.findOne({
            where: {
                id: req.body.id
            }, 
            attributes: ['name','price','duration']
        }); 

        return res.status(200).json({
            success: "true",
            message: "Here you have the treatment",
            buscaTratamientos: buscaTratamientos
        })

    } catch (error) {
        return res.status(500).json({ 

            success: true,
            message: "Get all treatments failed",
            error: error.message
        });
    }
}

treatmentController.getAllTreatments = async (req, res) => {
    try {
        
        const buscaTratamientos = await treatment.findAll({
            attributes: ['id','name','price','duration']
        }); 

        return res.status(200).status(200).json({
            success: "true",
            message: "Here you have the treatments",
            buscaTratamientos: buscaTratamientos
        })

    } catch (error) {
        return res.status(500).json({ 

            success: true,
            message: "Get all treatments failed",
            error: error.message
        });
    }
}

module.exports = treatmentController