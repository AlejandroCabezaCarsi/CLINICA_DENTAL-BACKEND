const {user} = require('../models'); 

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const userController = {}; 

userController.createUser = async (req,res) => {

    try {

        if (req.body.password.length < 4) {
            return res.send('Password must be longer than 4 characters');
        }

        const newPassword = bcrypt.hashSync(req.body.password, 8);

        const newUser = await user.create(
            {
                name: req.body.name,
                lastname:req.body.lastname,
                email: req.body.email,
                password: newPassword,
                phonenumber: req.body.phonenumber,
                dni: req.body.dni,
                roleId: req.body.roleId
            }
        );

        return res.json(newUser)

    } catch (error) {

        return res.status(500).json({ 

            success: true,
            message: "can't create role",
            error: error.message

        }); 
    }
}

module.exports = userController