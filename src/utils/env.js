import { config } from "dotenv";

config();

const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "";
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "";
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "";
const DATABASE_URL = process.env.DATABASE_URL || "";
const SECRET = process.env.SECRET || "";
const USER_MAIL = process.env.USER_MAIL || "";
const PASS_MAIL = process.env.PASS_MAIL || "";

export default {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
  DATABASE_URL,
  SECRET,
  USER_MAIL,
  PASS_MAIL,
};
