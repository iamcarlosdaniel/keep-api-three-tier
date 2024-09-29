import { Router } from "express";
import { authController } from "../../controllers/auth.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { authValidation } from "../../database/schemas/auth.schema.js";

const router = Router();

//Sign up
router.post(
  "/sign-up",
  validationMiddleware(authValidation.signUpSchema),
  authController.signUp
);

//Sign in
router.post(
  "/sign-in",
  validationMiddleware(authValidation.signInSchema),
  authController.signIn
);

//Sign out
router.post("/sign-out", authController.signOut);

//Get auth status
router.get("/status", authMiddleware, authController.authStatus);

export default router;
