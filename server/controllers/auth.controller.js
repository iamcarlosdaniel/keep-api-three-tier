import { authService } from "../services/auth.service.js";

const signUp = async (req, res) => {
  try {
    const userData = req.body;
    const { token } = await authService.signUp(userData);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: true,
      secure: true,
    });

    res.status(200).send({
      status: "OK",
      data: {
        message: "Congratulations! Your account has been successfully created.",
      },
    });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: [{ message: error?.message || error }] },
    });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { token } = await authService.signIn(email, password);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(200).send({
      status: "OK",
      data: { message: "Login successful. Welcome back!" },
    });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: [{ message: error?.message || error }] },
    });
  }
};

const signOut = async (req, res) => {
  try {
    const { token } = req.cookies.token;

    await authService.signOut(token);

    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(200).send({
      status: "OK",
      data: { message: "Sign out successfully" },
    });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: [{ message: error?.message || error }] },
    });
  }
};

const authStatus = async (req, res) => {
  try {
    const authUser = await authService.authStatus(req.user.id);

    res.status(200).send({
      status: "OK",
      data: { message: "Authenticated", user: authUser },
    });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: [{ message: error?.message || error }] },
    });
  }
};

export const authController = {
  signUp,
  signIn,
  signOut,
  authStatus,
};
