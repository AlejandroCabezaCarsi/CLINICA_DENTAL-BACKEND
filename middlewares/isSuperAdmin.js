const isSuperAdmin = (req, res, next) => {
    try {
        
        if (req.roleId !== 1) {

            return res.json({

                success: true,

                message: "You dont have permissions PRUEBA"
            });
        }

        next();

    } catch (error) {

        return res.status(500).json(
            {
                success: false,

                message: "You dont have permissions",

                error: error
            }
        )
    }
}

module.exports = isSuperAdmin;