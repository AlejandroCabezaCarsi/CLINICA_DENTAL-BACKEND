const {user} = require('../models'); 

const userController = {}; 

userController.createUser = async (req,res) => {

    try {

        const results = await user.create(
            {
                name: req.body.name,
                lastname:req.body.lastname,
                email: req.body.email,
                phonenumber: req.body.phonenumber,
                dni: req.body.dni,
                roleId: req.body.roleId
            }
        );

        return res.json(results)

    } catch (error) {

        return res.status(500).json({ 

            success: true,
            message: "can't create role",
            error: error.message

        }); 
    }
}

module.exports = userController