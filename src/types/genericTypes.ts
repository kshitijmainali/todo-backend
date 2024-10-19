import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

export interface RequestWithBody<T> extends Request {
  body: T;
}

export interface RequestWithParams<T extends ParamsDictionary> extends Request {
  params: T;
}

export interface RequestWithParamsAndBody<P extends ParamsDictionary, B> extends Request {
  params: P;
  body: B;
}
