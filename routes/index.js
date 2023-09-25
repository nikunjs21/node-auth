import { Router } from "express";
import passport from "passport";

import { home, hello } from "../controllers/home_controller.js";
import AuthController from "../controllers/auth_controller.js";

const router = Router();
router.get("/", home);
router.get("/dashboard", passport.checkAuthentication, hello);

router.get("/signin", AuthController.signIn);
router.post(
  "/dosignin",
  passport.authenticate("local", {
    failureRedirect: "/signin",
  }),
  AuthController.doSignIn
);
router.get("/signup", AuthController.signUp);
router.post("/dosignup", AuthController.doSignUp);

export default router;
