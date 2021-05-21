type jwtFunction = {
  decode: <T = any>(data: string) => T;
  sign: (data: string | object) => string;
};

export default jwtFunction;
