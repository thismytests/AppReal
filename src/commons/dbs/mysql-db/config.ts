import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// entities
import {Users} from './entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  entities: [Users],
  synchronize: true,
};
