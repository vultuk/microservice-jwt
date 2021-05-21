import {verify as jwtVerify} from 'jsonwebtoken';

const decode = (secretKey: string) => <T = unknown>(data: string): T => {
  try {
    const decodedData = jwtVerify(data, secretKey);

    return (decodedData as unknown) as T;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default decode;
