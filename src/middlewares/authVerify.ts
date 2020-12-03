import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";
export const verifyToken: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("token");
  if (!token) {
    res.status(401).json("No token provided");
    return;
  }
  const tokenDecode = jwt.verify(token, process.env.SECRET || "secret");
  // req.id = tokenDecode.id
  next();
};
