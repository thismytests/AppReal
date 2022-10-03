import { ApiProperty } from '@nestjs/swagger';

import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';

// db
import { UserService } from 'src/commons/dbs/mysql-db/users';
import { AuthService } from '../../commons/auth';

export class LoginParams {
  @ApiProperty({ required: true, description: 'login' })
  login: string;

  @ApiProperty({ required: true, description: 'password' })
  password: string;
}

@Controller('auth/login')
export class LoginController {
  constructor(private authService: AuthService,
              private userService: UserService) {
  }

  // @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Body() body: LoginParams) {
    const { login, password } = body;
    const dbUser = await this.userService.findUserByLoginAndPassword(login, password);

    if (dbUser) {
      return this.authService.login(dbUser.login, dbUser.firstname);
    }
  }
}
