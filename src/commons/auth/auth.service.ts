import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {
  }


  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async parseToken(token: string) {
    return this.jwtService.decode(token, { complete: true, json: true });
  }

  async login(login: string, name: string): Promise<{
    access_token: string,
    user: {
      name: string,
    }
  }> {
    const payload = { id: login };

    return {
      access_token: this.jwtService.sign(payload),
      // todo.. N.Litvin ... will be from db
      user: {
        name,
      },
    };
  }
}
