import {NextFunction, Request, Response} from 'express';
import {sign} from 'jsonwebtoken';

import Decode from './Functions/decode';
import Sign from './Functions/sign';
import jwtFunction from './Types/jwtFunction';
import Options from './Types/options';

declare global {
  namespace Express {
    interface Request {
      jwt: jwtFunction;
    }
  }
}

export default (options: Options) => (req: Request, res: Response, next: NextFunction) => {
  req.jwt = {
    decode: Decode(options.secretKey),
    sign: Sign(options.secretKey, options.expiresIn || 86400),
  };

  next();
};
