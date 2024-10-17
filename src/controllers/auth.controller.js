import { findById } from "../models/user.model";
import { login, register, updateProfile } from "../services/auth.service";
import { object, string, ref, array } from "yup";
import { ObjectId } from "mongoose";

const registerSchema = object().shape({
  fullName: string().required(),
  username: string().required(),
  email: string().email().required(),
  password: string().required(),
  confirmPassword: string().oneOf(
    [ref("password"), ""],
    "Passwords must match"
  ),
  roles: array().of(string()).optional(),
});

const loginSchema = object({
  email: string().email().required(),
  password: string().required(),
});

export async function login(req, res) {
    /**
     #swagger.tags = ['Auth']
     #swagger.requestBody = {
      required: true,
      schema: {
        $ref: "#/components/schemas/LoginRequest"
      }
    }
    */
    try {
        const { email, password } = req.body;
        await loginSchema.validate({ email, password });
        const token = await login({ email, password });
        res.status(200).json({
            message: "login success",
            data: token,
        });
    } catch (error) {
        const err = error;
        res.status(500).json({
            data: null,
            message: err.message,
        });
    }
}
export async function register(req, res) {
    /**
     #swagger.tags = ['Auth']
    #swagger.requestBody = {
      required: true,
      schema: {
        $ref: "#/components/schemas/RegisterRequest"
      }
    }
    */
    try {
        const { email, fullName, password, username, confirmPassword, roles } = req.body;

        await registerSchema.validate({
            email,
            fullName,
            password,
            username,
            confirmPassword,
            roles,
        });

        const user = await register({
            email,
            fullName,
            username,
            password,
            roles,
        });

        res.status(200).json({
            message: "registration success!",
            data: user,
        });
    } catch (error) {
        const err = error;
        res.status(500).json({
            data: err.message,
            message: "Failed register",
        });
    }
}
export async function me(req, res) {
    /**
     #swagger.tags = ['Auth']
    #swagger.security = [{
      "bearerAuth": []
    }]
    */
    try {
        const id = req.user?.id;
        const user = await findById(id);
        if (!user) {
            return res.status(403).json({
                message: "user not found",
                data: null,
            });
        }

        res.status(200).json({
            message: "success fetch user profile",
            data: user,
        });
    } catch (error) {
        const err = error;
        res.status(500).json({
            data: err.message,
            message: "Failed get user profile",
        });
    }
}
export async function profile(req, res) {
    /**
     #swagger.tags = ['Auth']
    #swagger.requestBody = {
      required: true,
      schema: {$ref: "#/components/schemas/UpdateProfileRequest"}
    }
    #swagger.security = [{
      "bearerAuth": []
    }]
    */
    try {
        const id = req.user?.id;
        const result = await updateProfile(
            id,
            req.body
        );
        res.status(200).json({
            message: "Profile updated successfully",
            data: result,
        });
    } catch (error) {
        const err = error;
        res.status(500).json({
            data: err.message,
            message: "Failed update user profile",
        });
    }
}
