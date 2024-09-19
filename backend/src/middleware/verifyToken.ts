import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { DecodedToken } from "../types/express";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token; // Get token from cookies

  console.log(token);

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as DecodedToken;
    req.user = decoded; // Attach user to the request
    console.log("decode", req.user);
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
    console.log("decode", err);
  }
};

export default verifyToken;
