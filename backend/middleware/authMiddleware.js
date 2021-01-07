import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      console.log(token);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    }
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error("Authorization failed, Token Failed");
  }

  if (!token) {
    res.status(401);
    throw new Error("Authorization failed, No Token");
  }
});

export { protect };
