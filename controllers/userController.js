const {user} = require('../models'); 

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken');
const { where } = require('sequelize');

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


userController.loginUser = async (req,res) => {

    try {
        
        const  email = req.body.email;
        const password = req.body.password; 

        

        const buscaUsuario = await user.findOne(
            {
                where: {
                    email: email
                }
            }
        )
        
        if (!buscaUsuario){
            return res.json(
                {
                    success: true,
                    message: "Wrong credentials"
                }
            )
        }
        
        // const validPassword = bcrypt.compareSync(password, buscaUsuario.password);
        
        // if(!validPassword){
        //     return res.json(
        //         {
        //             success: true,
        //             message: "Wrong credentials2"
        //         }
        //     )
        // }
        
        const token = jwt.sign(
            {
                userId: user.id,
                roleId: user.roleId,
                email: user.email
            },
            'zumitoDePiña',
            {
                expiresIn: '8h'
            }
        ); 

        return res.json(
            {
                success: true,
                message: "User Logged",
                token: token
            }
        )


    } catch (error) {
        
        return res.status(500).json({ 

            success: true,
            message: "Wrong credentials",
            error: error.message

        });
    }
}

userController.deleteUser = async (req,res) => {

    try {
        const results = await user.destroy({
            where: {
                name: req.body.name,
                password: req.body.password,
                dni: req.body.dni
            }
        })
        return res.json(
            {
                success:true,
                message: "User deleted correctly",
                results
            }
        )
    } catch (error) {
        return res.status(500).json({ 

            success: true,
            message: "can't cancel user",
            error: error.message
        });
    }


}

module.exports = userController