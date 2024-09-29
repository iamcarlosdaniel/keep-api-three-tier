import User from "../database/models/user.model.js";
import Session from "../database/models/session.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

const signUp = async (userData) => {
  try {
    const { email, password } = userData;

    const userFound = await User.findOne({ email });

    if (userFound) {
      throw new Error("The email already exists");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      ...userData,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    const newSession = new Session({
      user_id: userSaved._id,
      access_token: token,
    });

    await newSession.save();

    return { user: userSaved, token };
  } catch (error) {
    throw new Error(error.message);
  }
};
const signIn = async (email, password) => {
  try {
    const userFound = await User.findOne({ email });

    if (!userFound) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      throw new Error("Incorrect password");
    }

    const token = await createAccessToken({
      id: userFound._id,
      username: userFound.username,
    });

    const newSession = new Session({
      user_id: userFound._id,
      access_token: token,
    });

    await newSession.save();

    return { user: userFound, token };
  } catch (error) {
    throw new Error(error.message);
  }
};
const signOut = async (token) => {
  try {
    await Session.findOneAndDelete({ token });

    return { message: "Sign out successfully" };
  } catch (error) {
    throw new Error(error.message);
  }
};

const authStatus = async (userId) => {
  try {
    const userFound = await User.findById(userId).select("_id username email");
    return userFound;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const authService = {
  signUp,
  signIn,
  signOut,
  authStatus,
};
