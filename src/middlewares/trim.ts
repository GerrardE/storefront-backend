import { NextFunction, Request, Response } from 'express';
import IObjectConstructor from '../interfaces/object';

const trim = (req: Request, res: Response, next: NextFunction): void => {
  const keysArr = Object.keys(req.body);

  req.body = keysArr.reduce((obj: IObjectConstructor, key) => {
    obj[key] = typeof req.body[key] === 'string'
      ? req.body[key].replace(/ +/g, ' ').trim() : req.body[key];

    return obj;
  }, {});

  next();
};

export default trim;
