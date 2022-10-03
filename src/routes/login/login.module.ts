import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { AuthModule } from '../../commons/auth';
import { UserModule } from '../../commons/dbs/mysql-db/users';

// db

@Module({
  imports: [
    // db
    UserModule,
    AuthModule,
  ],
  controllers: [LoginController],
})
export class LoginModule {
}
