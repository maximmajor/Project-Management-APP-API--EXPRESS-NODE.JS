import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();
const secretKey = process.env.TOKEN_KEY as string;

const auth = async (req: any, res: Response, next: NextFunction): Promise<void> => {
  const token: string = req.cookies.jwt;
  if (!token) res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, secretKey);
    req.regUser = decoded;
    next();
  } catch (ex) {
    res.status(400).send({ error: 'please you have to be Authenticated' });
  }
};

export default auth;
