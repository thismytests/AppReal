import { Module } from '@nestjs/common';
import { MysqlDbModule } from '../mysql-db.module';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [MysqlDbModule],
  providers: [
    ...userProviders,
    UserService,
  ],
  exports: [
    UserService,
  ],
})
export class UserModule {
}
