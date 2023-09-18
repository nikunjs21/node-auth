import { Router } from "express";

import { home, hello } from "../controllers/home_controller.js";
import AuthController from "../controllers/auth_controller.js";

const router = Router();
router.get("/", home);
router.get("/dashboard", hello);

router.get("/signin", AuthController.signIn);
router.post("/dosignin", AuthController.doSignIn);
router.get("/signup", AuthController.signUp);
router.post("/dosignup", AuthController.doSignUp);

export default router;
