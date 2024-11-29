import jwt, { JwtPayload } from "jsonwebtoken";
import { IUser } from "../User/user.interface";

export const CreateToken = (
  jwtPayload: Partial<IUser>,
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn: expiresIn,
  });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret as string) as JwtPayload;
};

export const CreateUserToken = (jwtPayload: {_id: string;name: string; username: string;email: string;},secret: string, expiresIn: string) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn: expiresIn,
  });
};
