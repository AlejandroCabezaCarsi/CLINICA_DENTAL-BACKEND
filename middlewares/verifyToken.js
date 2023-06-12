const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    try {

        const bearerToken = req.headers.authorization;

        if(!bearerToken) {

            return res.json(

                {
                    succes: true,
                    message: "no puedes pasar"
                }
            )
        }

        const token = bearerToken.split(" ")[1];         

        const decoded = jwt.verify(token, 'zumitoDePiña');

        req.userId = decoded.userId;

        req.roleId = decoded.roleId;

        next();
        
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Token Invalid",
                error: error
            }
        )
    }

}

module.exports = auth;