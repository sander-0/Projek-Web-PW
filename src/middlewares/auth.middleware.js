import { getUserData } from "../utils/jwt.js";

// Middleware untuk autentikasi
const authMiddleware = (req, res, next) => {
  const authorization = req.headers?.authorization;

  if (!authorization) {
    return res.status(403).json({
      message: "unauthorized0",
      data: null,
    });
  }

  const [prefix, token] = authorization.split(" ");

  if (!(prefix === "Bearer" && token)) {
    return res.status(403).json({
      message: "unauthorized1",
      data: null,
    });
  }

  const user = getUserData(token);

  if (!user) {
    return res.status(403).json({
      message: "unauthorized2",
      data: null,
    });
  }

  req.user = user; // Menyimpan informasi user ke dalam request

  next();
};

export default authMiddleware;
