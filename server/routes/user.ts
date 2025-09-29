import express from "express";
import { registerUser, loginUser, getAllUsers } from "../controller/user";

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Get all users
router.get("/", getAllUsers);

export default router;
