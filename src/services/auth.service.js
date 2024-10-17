import { findOne, create, findById, findByIdAndUpdate } from "../models/user.model";
import { encrypt } from "../utils/encryption";
import { generateToken } from "../utils/jwt";

const login = async (payload) => {
  const { email, password } = payload;
  const userByEmail = await findOne({
    email,
  });

  if (!userByEmail) {
    return Promise.reject(new Error("email: user not found"));
  }
  const validatePassword = encrypt(password) === userByEmail.password;

  if (!validatePassword) {
    return Promise.reject(new Error("password: user not found"));
  }

  const token = generateToken({
    id: userByEmail.id,
    roles: userByEmail.roles,
  });

  return token;
};

const register = async (payload) => {
  const { email, fullName, username, password, roles } = payload;
  const user = await create({
    email,
    fullName,
    password,
    username,
    roles,
  });

  return user;
};

const me = async (userId) => {
  const user = await findById(userId);
  if (!user) {
    return Promise.reject(new Error("user not found"));
  }
  return user;
};

const updateProfile = async (userId, updateUserData) => {
  const result = await findByIdAndUpdate(
    userId,
    {
      ...updateUserData,
    },
    {
      new: true,
    }
  );
  if (!result) {
    return Promise.reject(new Error("failed update user"));
  }
  return result;
};

export default {
  login,
  register,
  me,
  updateProfile,
};
