import { sign, verify } from "jsonwebtoken";
import { SECRET } from "./env.js";

// Fungsi untuk menghasilkan token JWT
const generateToken = (payload) => {
  return sign(payload, SECRET);
};

// Fungsi untuk memvalidasi dan mendapatkan data dari token JWT
const getUserData = (token) => {
  try {
    const decoded = verify(token, SECRET);
    return decoded;
  } catch (err) {
    console.error("Invalid token:", err);
    return null;
  }
};

export default {
  generateToken,
  getUserData
};
