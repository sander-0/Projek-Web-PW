import { Router } from "express";
import { single, multiple } from "../middlewares/upload.middleware.js";
import { single as _single, multiple as _multiple } from "../controllers/upload.controller.js";
import { findAll, create, findOne, update, remove } from "../controllers/menu.controller.js";
import { findAll as _findAll, create as _create, findOne as _findOne, update as _update, delete as _delete } from "../controllers/categories.controller.js";
import { login, register, me, profile } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import rbacMiddleware from "../middlewares/rbac.middleware.js";
import { createOrder, findAllByUser } from "../controllers/order.controller.js";

const router = Router();

// CRUD Categories
router.get("/categories", _findAll);
router.post("/categories", _create);
router.get("/categories/:id", _findOne);
router.put("/categories/:id", _update);
router.delete("/categories/:id", _delete);

// CRUD 
router.get("/products", findAll);
router.post("/products", create);
router.get("/products/:id", findOne);
router.put("/products/:id", update);
router.delete("/products/:id", remove);

// Upload routes
router.post("/upload", single, _single);
router.post("/uploads", multiple, _multiple);

// Auth routes
router.post("/auth/login", login);
router.post("/auth/register", register);
router.get("/auth/me", authMiddleware, rbacMiddleware(["admin"]), me);
router.put("/auth/update-profile", authMiddleware, profile);

// Order routes
router.post("/orders", authMiddleware, createOrder);
router.get("/orders", authMiddleware, findAllByUser);

export default router;
