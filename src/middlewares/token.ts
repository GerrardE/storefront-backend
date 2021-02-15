import ResponseController from '../helpers/response';
import jwt, { Secret } from 'jsonwebtoken';
import { IUserPayload } from '../interfaces/userpayload';
import { NextFunction, Request, Response } from 'express';

const secret: Secret = process.env.SECRET_KEY!;

export const createToken = ((payload: IUserPayload) => jwt.sign(payload, secret, { expiresIn: '1d' }));

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
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
  }
};
