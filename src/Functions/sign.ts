import { sign } from 'jsonwebtoken';

export default (secretKey: string, expiresIn: number) => (data: string | object): string => {
  const token = sign(data, secretKey, {
    algorithm: 'HS512',
    expiresIn,
  });

  return token;
};
