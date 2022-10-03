/* eslint-disable dot-notation */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { decode } from 'jsonwebtoken';

export const AuthTokenLogin = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const jwtToken: string = request.headers.authorization.split(' ')[1];
    const result = decode(jwtToken);
    return decode(jwtToken)['id'];
  },
);

export interface AuthUser {
  userId: string;
}