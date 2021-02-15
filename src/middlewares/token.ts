import ResponseController from '../helpers/response';
import jwt, { Secret } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import IObjectConstructor from '../interfaces/object';

const secret: Secret = process.env.SECRET_KEY as string;

export const createToken = ((payload: IObjectConstructor): string => jwt.sign(payload, secret, { expiresIn: '1d' }));

export const verifyToken = (req: Request, res: Response, next: NextFunction): NextFunction | Response | void => {
  const token = req.headers.authorization || req.body.token;

  if (!token) {
    return ResponseController.error(res, 403, 403, {}, 'No token supplied');
  }

  if (token) {
    let decoded;

    try {
      decoded = jwt.verify(token, secret)
    } catch (error) {
      return ResponseController.error(res, 401, 401, error, 'Invalid token supplied');
    }

    req.body.decoded = decoded;
    return next();
  };
};
