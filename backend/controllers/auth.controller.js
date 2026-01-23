import bcryptjs from "bcryptjs";

import User from "../models/auth.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/emails.js";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000,
    ).toString();
    const hashedVerificationCode = await bcryptjs.hash(verificationCode, 10);

    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationCode: hashedVerificationCode,
      verificationCodeExpiresAt: Date.now() + 15 * 60 * 1000,
    });

    await user.save();

    generateTokenAndSetCookie(res, user._id);

    await sendVerificationEmail(user.email, verificationCode);

    res.status(201).json({
      success: true,
      message: "User created successfully.",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = Date.now();
    await user.save();

    res.status(200).json({
      success: true,
      message: "Login successful.",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    lo
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully." });
};

export const verifyEmail = async (req, res) => {
  const { email, code } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Cannot find user!",
      });
    }

    if (user.verificationCodeExpiresAt < Date.now()) {
      return res.status(400).json({ message: "Kodning vaqti o'tib ketgan" });
    }

    const isCodeValid = bcryptjs.compare(code, user.verificationCode);

    if (!isCodeValid) {
      return res.status(400).json({ message: "Xato kod kiritildi" });
    }

    user.isVerified = true;
    user.verificationCode = undefined;
    user.verificationCodeExpiresAt = undefined;
    await user.save();

    await sendWelcomeEmail(user.email, user.name);

    res.status(200).json({
      success: true,
      message: "Email verified successfully.",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};
