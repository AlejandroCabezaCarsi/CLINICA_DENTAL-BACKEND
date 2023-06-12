const isSuperAdmin = (req, res, next) => {

    try {
        const bearerToken = req.headers.authorization;
    
        if (!bearerToken) {
          return res.status(401).json({
            success: false,
            message: "Access denied. Token is missing.",
          });
        }
    
        const token = bearerToken.split(" ")[1];
        const decoded = jwt.verify(token, "zumitoDePiña");
        const roleId = decoded.roleId;
    
        if (roleId !== 1) {
          return res.status(403).json({
            success: false,
            message: "Access denied. You don't have the required permissions.",
          });
        }
    
        next();
        
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Error checking permissions.",
          error: error.message,
        });
      }
    };


module.exports = isSuperAdmin;
