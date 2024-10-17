const rbacMiddleware = (roles) => {
    return (req, res, next) => {
      const userRoles = req.user?.roles;
  
      if (!userRoles || !userRoles.some((userRole) => roles.includes(userRole))) {
        return res.status(403).json({
          message: "You are a User",
        });
      }
  
      next();
    };
  };
  
  export default rbacMiddleware;
  