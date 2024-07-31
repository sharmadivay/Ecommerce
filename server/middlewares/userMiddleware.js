import JWT from "jsonwebtoken";
import userModel from "../models/userModal.js";

//Protected route token base
export const requireSignIn = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Authorization token required" });
    }
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin check
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "unAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
